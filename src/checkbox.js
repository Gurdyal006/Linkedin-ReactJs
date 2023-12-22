import { useReducer } from "react";

export function Checkbox() {
  const [check, setCheck] = useReducer((check) => !check, false);

  return (
    <>
      <label htmlFor="check">{check ? check : "not checked"}</label>
      <input id="check" value={check} onClick={setCheck} type="checkbox" />
    </>
  );
}
