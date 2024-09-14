import style from "./Description.module.css";

const Description = () => {
  return (
    <body className={style.body}>
      <h1 className={style.h1}>
        <b>About the Project:</b>
      </h1>
      <p className={style.p}>
        I have developed a calculator as my first React app, using modern web
        development tools and frameworks.
        <br />
        This project was built with React and Vite.
        <br />
        For the UI, I incorporated Bootstrap for a clean, responsive design,
        ensuring the app works seamlessly on any device.
        <br />
        In addition to building a functional calculator, I explored and applied
        modular CSS techniques to organize my styles efficiently and keep my CSS
        scoped to individual components.
        <br />
        This approach makes the codebase more maintainable , reusable and
        modular.
      </p>
      <h1>&nbsp;</h1>
      <h1 className={style.h1}>
        <b>Key Features and Skills Learned</b>
      </h1>
      <ul className={style.p}>
        <li>React Components & Props</li>
        <li>Map Method</li>
        <li>Modular CSS</li>
        <li>GitHub Repository Management</li>
        <li>State Handling</li>
        <li>Passing value from child to parent and parent to child</li>
        <li>Event Handling</li>
        <li>Deploying React Apps</li>
      </ul>
    </body>
  );
};

export default Description;
