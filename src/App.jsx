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
        <h1 style={{ color: "#ff6b6b" }}>React Calculator</h1>

        <h3 style={{ color: "#ff6b6b" }}>
          Welcome to my first React Calculator project!
        </h3>
      </center>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <center>
            <ButtonsContainer
              onButtonClick={onButtonClick}
              displayValue={calVal}
            ></ButtonsContainer>
          </center>
        </div>
        <div style={{ flex: 1, marginLeft: "0px" }}>
          <Description />
        </div>
      </div>
      <h1>&nbsp;</h1>
      <h1 style={{ color: "#ff6b6b", textAlign: "center" }}>Thank you.</h1>
    </body>
  );
}

export default App;
