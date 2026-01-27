import { useState } from "react";
import {
  AddFriendForm,
  Button,
  FriendsList,
  SplitBillForm,
} from "./components";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(true);

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }
  return (
    <div className="app">
      <aside className="sidebar">
        <FriendsList />
        {showAddFriend && <AddFriendForm />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </aside>
      <SplitBillForm />
    </div>
  );
}

export default App;
