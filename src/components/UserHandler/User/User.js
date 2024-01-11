import React from "react";
import './User.css'

const User = (props)=>{
    return (
        <li id={props.id} className="user-li">
            {`${props.name} (${props.age} years old)`}
        </li>
    )
}

export default User;