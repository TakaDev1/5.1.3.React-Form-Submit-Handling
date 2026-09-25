import React from "react";
import useHandleCheck from "../hooks/useHandleCheck";

const CheckPage = () => {
  const { isChecked, handleCheck } = useHandleCheck();

  return (
    <div>
      <label htmlFor="check">
        <input id="check" type="checkbox" checked={isChecked} onChange={handleCheck} />
        同意する
      </label>

      <div>{isChecked ? <p>同意済み</p> : ""}</div>
    </div>
  );
};

export default CheckPage;
