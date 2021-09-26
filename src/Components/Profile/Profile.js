import React from "react";
import styles from "./Profile.module.css";
import propTypes from "prop-types";

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={avatar} className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {Object.entries(stats).map((item) => (
          <li key={item[0]}>
            <span className={styles.label}>{item[0]}</span>
            <span className={styles.quantity}>{item[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.shape({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }),
};
