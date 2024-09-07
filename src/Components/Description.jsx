import style from "./Description.module.css";

const Description = () => {
  return (
    <body className={style.body}>
      <b>About the Project:</b>
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
      <b>Key Features and Skills Learned</b>
      <ul>
        <li>React Components & Props:</li>
        <li>Map Method</li>
        <li>Modular CSS</li>
        <li>GitHub Repository Management</li>
        <li>Deploying React Apps</li>
      </ul>
    </body>
  );
};

export default Description;
