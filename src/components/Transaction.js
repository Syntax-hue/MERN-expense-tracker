import React from "react";

export default function Transaction({ trans }) {
  const sign = trans.amount > 0 ? "+" : "-";

  console.log(trans.amount);
  console.log(sign);
  return (
    <li className={trans.amount < 0 ? "minus" : "plus"}>
      {trans.text}
      <span>
        {sign}
        {Math.abs(trans.amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
}
