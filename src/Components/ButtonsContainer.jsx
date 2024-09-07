import style from "./ButtonsContainer.module.css";
import Display from "./Display";
const ButtonsContainer = () => {
  const buttonOperations = ["+", "-", "×", "÷"];
  const buttonNumbers = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    ".",
    "AC",
  ];

  return (
    <div className={style.container}>
      {/* Display section */}
      <Display />

      {/* Operation buttons */}
      <div className={style.operations}>
        {buttonOperations.map((operation) => (
          <button key={operation} className={style.operationButton}>
            {operation}
          </button>
        ))}
      </div>

      {/* Number buttons */}
      <div className={style.numbers}>
        {buttonNumbers.map((number) => (
          <button key={number} className={style.numberButton}>
            {number}
          </button>
        ))}
      </div>

      {/* Equals button */}
      <button aria-rowspan={4} className={style.equalsButton}>
        =
      </button>
    </div>
  );
};

export default ButtonsContainer;
