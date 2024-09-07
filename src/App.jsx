// "bootstrap/dist/css/bootstrap.min.css";

import ButtonsContainer from "./Components/ButtonsContainer";
import Description from "./Components/Description";

function App() {
  return (
    <body>
      <center>
        <h1>React Calculator</h1>
      </center>
      <h3>Welcome to my first React Calculator project!</h3>
      <center>
        <div>
          <ButtonsContainer></ButtonsContainer>
        </div>
      </center>
      <Description />
      <h1>Thank you.</h1>
    </body>
  );
}

export default App;
