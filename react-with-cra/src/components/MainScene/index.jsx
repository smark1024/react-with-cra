import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MainScene = () => {
    const [users, setUsers] = useState([]);
    const fetch = async () => {
        const response = await axios({
            method: "get",
            url: "https://koreanjson.com/users",
        });
        setUsers(response.data);
    };

    useEffect(() => {
        fetch();
    }, []);

    return (<div>
        {users.map((user, idx) => {
            return (
                <div key={idx}>
                    {user.username}
                </div>
            )
        })}
    </div>)
};

export default MainScene