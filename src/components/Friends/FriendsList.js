import PropTypes from "prop-types";
import FriendItem from "./Friends";
import { List } from "./Friends.styled";

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map((friend) => (
        <FriendItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
