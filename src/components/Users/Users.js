import React, {useEffect, useState} from 'react';
import axios from "axios";
import {User} from "../User/User";
import {axiosService} from "../../services/axiosService";
import {userService} from "../../services/userService";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails]= useState(null);


    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers([...value]))
    })
    return (
        <div>
            <h2>UserDetails:</h2>
            {userDetails && <User user={userDetails}/> }
            <hr/>
            <h1>Users:</h1>
            {users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails}/>)}
        </div>
    );
};

export {Users};