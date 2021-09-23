import React from 'react'


const Profile = ({avatar,name,tag,location,stats}) => {
    return (
<div >
  <div >
    <img src={avatar}  alt={avatar} width='200' />
    <p>{name}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul >
    <li>
      <span >Followers</span>
      <span >{stats.followers}</span>
    </li>
    <li>
      <span >Views</span>
      <span >{stats.views}</span>
    </li>
    <li>
      <span >Likes</span>
      <span >{stats.likes}</span>
    </li>
  </ul>
</div>
    );
}

export default Profile;