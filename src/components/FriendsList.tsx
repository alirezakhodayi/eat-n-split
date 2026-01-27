import { initialFriends } from "../data/data";
import { Friend } from "./Friend";

function FriendsList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

export { FriendsList };
