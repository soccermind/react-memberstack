import './NavBar.css';
import { useEffect } from "react";

export default function NavBar() {
  // useEffect(() => {
  //     MemberStack.onReady.then(function(member) {   
  //       // check if member is logged in   
  //       console.log(member.loggedIn) // returns true or false
  //     })
  //   }, [])
  // const handleLogout = () => {
    

  // }
  return (
    
    <div>
      <ul>
        <li><a data-ms-content="basic" href="#/ms/logout">Log out</a></li>
        <li><a data-ms-content="basic" href="#">Members</a></li>
        <li><a href="#/ms/login">Log in</a></li>
        <li><a href="#/ms/signup/60391f9e833e9f000423e8be">Sign up</a></li>
      </ul>
    </div>
  );
}

