import React from "react";
import UserInfo from "./UserInfo";

function UserProfile(){
    const user={
        name:"Suchitra Sahu",
        age:26,
        

    };
    return(
        <div>
            <h1 style={{color:"green"}}>User Profile</h1>
            <UserInfo name={user.name} age={user.age} />
        </div>
    );

}
export default UserProfile;