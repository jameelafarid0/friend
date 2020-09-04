import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friends, setFriends] = useState({});
    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriends(data) )

    },[])
    return (
        <div>
            <p>This is friend detail components: {friendId}</p>
            <h3>{friends.name}</h3>
        </div>
    );
};

export default FriendDetail;