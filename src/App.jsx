import { useState } from "react";
import ButtonsContainer from "./Components/ButtonsContainer";
import Description from "./Components/Description";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "AC") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }

    console.log(buttonText);
  };

  return (
    <body>
      <center>
        <h1>React Calculator</h1>
      </center>
      <h3>Welcome to my first React Calculator project!</h3>
      <center>
        <div>
          <ButtonsContainer
            onButtonClick={onButtonClick}
            displayValue={calVal}
          ></ButtonsContainer>
        </div>
      </center>
      <Description />
      <h1>Thank you.</h1>
    </body>
  );
}

export default App;
