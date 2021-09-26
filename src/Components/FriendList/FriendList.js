import React from "react";
import FriendListItem from "./FriendListItem";
import styles from "./FriendListItem.module.css";
import PropsTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <div className={styles.friend}>
      <ul className={styles.friendList}>
        {friends.map(({ id, name, avatar, isOnline }) => (
          <FriendListItem
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;

FriendList.PropsTypes = {
  friends: PropsTypes.arrayOf(PropsTypes.object),
};
