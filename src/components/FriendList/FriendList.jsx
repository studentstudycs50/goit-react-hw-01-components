import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendList/FriendListItem'

function FriendList({ friends }) {
    return (
        <ul className="friendList">      
       { friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />  
            ))
        } 
    </ul>
    )
    
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;