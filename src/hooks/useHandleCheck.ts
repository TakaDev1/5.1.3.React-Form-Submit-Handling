import { useState } from "react";

const useHandleCheck = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return { isChecked, handleCheck };
};

export default useHandleCheck;
