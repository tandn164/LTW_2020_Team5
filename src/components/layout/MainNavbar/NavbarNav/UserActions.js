import React from "react";
import { Link } from "react-router-dom";
import {auth, getUserDocument} from "../../../Firebase/firebase"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      user: null
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  async componentDidMount() {
    const res = await this.getUser()
    this.setState({
      ...this.state,
      user: res
    })
  }

  getUser = async () => {
    const userInfo = await getUserDocument(auth.currentUser.uid)
    return userInfo
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    let userName = ""
    let userProfileURL = "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
    if (this.state.user) {
      userName = this.state.user.displayName
      userProfileURL = this.state.user.urlProfile ? this.state.user.urlProfile : userProfileURL
    }
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar"
            src={userProfileURL}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">{userName}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem tag={Link} to="user-profile">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag={Link} to="/" className="text-danger" onClick = {() => {auth.signOut()}}> 
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
