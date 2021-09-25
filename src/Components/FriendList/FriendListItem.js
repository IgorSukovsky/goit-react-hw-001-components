import React from "react";
import styles from "./FriendListItem.module.css";
import PropTypes from "prop-types";
import { online, offline } from "./FriendListItem.module.css";

const FriendListItem = (props) => {
  return (
    <li className={styles.item}>
      <span className={props.isOnline ? online : offline}> </span>
      <img
        className={styles.avatar}
        src={props.avatar}
        alt={props.name}
        width="48"
      />
      <p className={styles.name}>{props.name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
