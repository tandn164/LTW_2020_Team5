import React, { Component, createContext } from "react";
import { auth,generateUserDocument } from "../components/Firebase/firebase";

export const UserContext = createContext({ user: null });
class UserProvider extends Component {
  state = {
    user: null
  };
  
  componentDidMount = async () => {
    auth.onAuthStateChanged(async userAuth => {
      console.log(123123123);
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
    });
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
