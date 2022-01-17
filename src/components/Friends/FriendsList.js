import PropTypes from "prop-types";
import FriendItem from "./Friends";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
