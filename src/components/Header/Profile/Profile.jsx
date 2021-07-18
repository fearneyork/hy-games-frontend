import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../contexts/User";
import "./Profile.css";

function Profile() {
    const { userAvatar } = useContext(UserContext);
    return (
        <img
            className="avatar"
            src={userAvatar}
            alt="avatar"
        ></img>
    );
}

export default Profile;
