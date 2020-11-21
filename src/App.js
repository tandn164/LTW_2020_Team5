import React from "react";
import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";
import ProfileScreen from "./ui/ProfileScreen/ProfileScreen";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <UserProvider>
    <div>
      <ProfileScreen />
    </div>
    // </UserProvider>
  );
}
export default App;