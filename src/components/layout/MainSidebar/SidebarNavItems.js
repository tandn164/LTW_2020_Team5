import React from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { auth, getUserDocument } from "../../Firebase/firebase"
import { Store } from "../../../flux";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navItems: Store.getSidebarItems(),
      role: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  async componentDidMount() {
    if (auth.currentUser) {
      const res = await getUserDocument(auth.currentUser.uid)
      if (res.role && res.role == "admin") {
        this.setState({
          ...this.state,
          role: "admin"
        })
      } else {
        this.setState({
          ...this.state,
          navItems: Store.getUserSidebarItems()
        })
      }
    }
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    if (this.state.role == "admin") {
      this.setState({
        ...this.state,
        navItems: Store.getSidebarItems()
      });
    } else {
      this.setState({
        ...this.state,
        navItems: Store.getUserSidebarItems()
      });
    }
  }

  render() {
    const { navItems: items } = this.state;
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">
          {items.map((item, idx) => (
            <SidebarNavItem key={idx} item={item} />
          ))}
        </Nav>
      </div>
    )
  }
}

export default SidebarNavItems;
