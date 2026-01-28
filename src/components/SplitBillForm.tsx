import { useState } from "react";
import type { IFriend } from "../types/friend-interface";
import { Button } from "./Button";

interface IProps {
  selectedFriend: IFriend;
  onSplitBill: (value: number) => void;
}

function SplitBillForm({ selectedFriend, onSplitBill }: IProps) {
  const [bill, setBill] = useState<number>(0);
  const [paidByUser, setPaidByUser] = useState<number>(0);
  const paidByFriend = bill - paidByUser;
  const [whoIsPaying, setWhoIsPaying] = useState<string>("user");

  function handleChangeBill(e: React.ChangeEvent<HTMLInputElement>) {
    setBill(Number(e.target.value));
  }

  function handleChangePaidByUser(e: React.ChangeEvent<HTMLInputElement>) {
    setPaidByUser(
      Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
    );
  }

  function handleChangeWhoIsPaying(e: React.ChangeEvent<HTMLSelectElement>) {
    setWhoIsPaying(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);

    setBill(0);
    setPaidByUser(0);
    setWhoIsPaying("user");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💵 Bill value:</label>
      <input type="text" value={bill} onChange={handleChangeBill} />

      <label>🙋 Your expense:</label>
      <input type="text" value={paidByUser} onChange={handleChangePaidByUser} />

      <label>🫱🏼‍🫲🏻 {selectedFriend.name}'s expense:</label>
      <input type="text" disabled value={paidByFriend} />

      <label>💸 Who is paying the bill :</label>
      <select value={whoIsPaying} onChange={handleChangeWhoIsPaying}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export { SplitBillForm };
