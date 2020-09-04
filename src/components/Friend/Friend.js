import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const friendStyle = {
        border: '1px solid orange',
        margin: '20px',
        padding: '20px',
        borderRadius:'20px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>id: <Link to={`/friend/${id}`}>
                <button>
                show detail of {id}
                </button>
                
                 </Link></p>
        </div>
    );
};

export default Friend;