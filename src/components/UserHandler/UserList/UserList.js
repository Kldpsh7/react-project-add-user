import React from "react";
import User from "../User/User";
import './UserList.css'

const UserList = (props)=>{
    return props.users.length>0 && (
        <ul className="user-list">
            {props.users.map(user=>(<User key={user.id} id={user.id} name={user.name} age={user.age}/>))}
        </ul>
    )
}

export default UserList;