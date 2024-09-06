// "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";

function App() {
  return (
    <div className={style.calculator}>
      <Display />
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;
