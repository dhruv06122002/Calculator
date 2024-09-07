// "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";

function App() {
  return (
    <body className={style.body}>
      <center>
        <h1>This is my First react app .</h1>
        <h1></h1>
        <div className={style.calculatorBody}>
          <div className={style.calculator}>
            <Display />
            <ButtonsContainer></ButtonsContainer>
          </div>
        </div>
        <h1>Thank you.</h1>
      </center>
    </body>
  );
}

export default App;
