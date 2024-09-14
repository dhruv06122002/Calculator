import style from "./ButtonsContainer.module.css";
import Display from "./Display";
const ButtonsContainer = ({ onButtonClick, displayValue }) => {
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
      <Display display={displayValue} />
      <div className={style.operations}>
        {buttonOperations.map((operation) => (
          <button
            key={operation}
            className={style.operationButton}
            onClick={() => onButtonClick(operation)}
          >
            {operation}
          </button>
        ))}
      </div>

      <div className={style.numbers}>
        {buttonNumbers.map((number) => (
          <button
            key={number}
            className={style.numberButton}
            onClick={() => onButtonClick(number)}
          >
            {number}
          </button>
        ))}
      </div>

      <button
        aria-rowspan={4}
        className={style.equalsButton}
        onClick={() => onButtonClick("=")}
      >
        =
      </button>
    </div>
  );
};

export default ButtonsContainer;
