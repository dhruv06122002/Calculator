import style from "./Display.module.css";

const Display = ({ display }) => {
  return (
    <input className={style.display} type="text" value={display} readOnly />
  );
};
export default Display;
