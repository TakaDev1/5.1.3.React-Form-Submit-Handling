import React from "react";
import useHandleCheck from "../hooks/useHandleCheck";

const CheckPage = () => {
  const { isChecked, handleCheck } = useHandleCheck();

  return (
    <div>
      <label htmlFor="check" className="text-white">
        <input id="check" type="checkbox" checked={isChecked} onChange={handleCheck} />
        同意する
      </label>

      <div
        className={`${isChecked ? "bg-yellow-500 text-black font-bold w-1/3 mx-auto my-10 py-5" : ""}`}
      >
        {isChecked ? <p>同意済み</p> : ""}
      </div>
    </div>
  );
};

export default CheckPage;
