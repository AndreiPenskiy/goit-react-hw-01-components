import PropTypes from "prop-types";

export default function FriendItem({ avatar, isOnline, name }) {
  return (
    <li>
      <span>{isOnline}</span>
      <img src={avatar} alt="User avatar" />
      <p>{name}</p>
    </li>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
