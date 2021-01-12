import React from 'react'
import PropTypes from 'prop-types';
import stylesFriend from '../FriendList/FriendList.module.css'

const FriendListItem = ({ id, avatar, name, isOnline}) => {
  // const statusFriend = isOnline ? stylesFriend.on : stylesFriend.off;
  //
//     return   isOnline ? (<li className={stylesFriend.item} key={id}>
//     <span className={stylesFriend.on}></span>
//     <img className={stylesFriend.avatar} src={avatar} alt={name} width="48" />
//         <p className={stylesFriend.name}>{name}</p>
// </li>) : (<li className={stylesFriend.item} key={id}>
//     <span className={stylesFriend.off}></span>
//     <img className={stylesFriend.avatar} src={avatar} alt={name} width="48" />
//         <p className={stylesFriend.name}>{name}</p>
// </li>)
        return   (<li className={stylesFriend.item} key={id}>
    <span className={isOnline ? stylesFriend.on : stylesFriend.off }></span>
    <img className={stylesFriend.avatar} src={avatar} alt={name} width="48" />
        <p className={stylesFriend.name}>{name}</p>
</li>) 
}

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
FriendListItem.defaultProps = {
  isOnline: true,
};

export default FriendListItem;