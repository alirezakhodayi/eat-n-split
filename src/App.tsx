import { useState } from "react";
import {
  AddFriendForm,
  Button,
  FriendsList,
  SplitBillForm,
} from "./components";
import { initialFriends } from "./data/data";
import type { IFriend } from "./types/friend-interface";

function App() {
  const [friends, setFriends] = useState<IFriend[]>(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<IFriend | null>(null);

  function handleAddFriend(friend: IFriend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
    console.log(friends);
  }

  function handleShowAddFriend() {
    setSelectedFriend(null);
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  function handleSelection(friend: IFriend) {
    setSelectedFriend((selectedFriend) =>
      selectedFriend?.id === friend.id ? null : friend,
    );
    setShowAddFriend(false);
  }

  function handleSplitBill(value: number) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <AddFriendForm onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </aside>
      {selectedFriend && (
        <SplitBillForm
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
