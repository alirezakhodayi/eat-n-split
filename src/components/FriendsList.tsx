import type { IFriend } from "../types/friend-interface";
import { Friend } from "./Friend";

interface IProps {
  friends: IFriend[];
  selectedFriend: IFriend | null;
  onSelection: (friend: IFriend) => void;
}
function FriendsList({ friends, selectedFriend, onSelection }: IProps) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

export { FriendsList };
