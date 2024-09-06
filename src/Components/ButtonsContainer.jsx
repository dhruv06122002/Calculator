import style from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const buttonNames = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    ".",
    "=",
    "/",
    "C",
  ];

  return (
    <div className={style.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button key={buttonName} className={style.button}>
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
