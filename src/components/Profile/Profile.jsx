import React from 'react';
import PropTypes from 'prop-types';
import stylesProfile from '../Profile/Profile.module.css'

const Profile = ({name, tag, location , avatar, stats}) => {
    return (
      <div className={stylesProfile.profile}>
      <div className={stylesProfile.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={stylesProfile.avatar}
    />
    <p className={stylesProfile.name}>{name}</p>
    <p className={stylesProfile.tag}>@{tag}</p>
     <p className={stylesProfile.location}>{location}</p>
  </div>

  <ul className={stylesProfile.stats}>
    <li>
      <span className={stylesProfile.label}>Followers</span>
      <span className={stylesProfile.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={stylesProfile.label}>Views</span>
      <span className={stylesProfile.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={stylesProfile.label}>Likes</span>
      <span className={stylesProfile.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
)
}
    Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;