import { useState } from "react";
import { Button } from "./Button";
import type { IFriend } from "../types/friend-interface";

interface IProps {
  onAddFriend: (friend: IFriend) => void;
}
function AddFriendForm({ onAddFriend }: IProps) {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("https://i.pravatar.cc/48");

  function handleChangeFriendName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleChangeImageUrl(e: React.ChangeEvent<HTMLInputElement>) {
    setImage(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !image) return;

    const id = Date.now();

    const newFriend: IFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🫱🏼‍🫲🏻Friend name:</label>
      <input type="text" value={name} onChange={handleChangeFriendName} />

      <label>🖼️Image URL:</label>
      <input type="text" value={image} onChange={handleChangeImageUrl} />

      <Button>Add</Button>
    </form>
  );
}

export { AddFriendForm };
