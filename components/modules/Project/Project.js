import style from "./index.scss";

const Project = ({ title, image, info, link }) => {
  return (
    <div className={style.wrapper}>
      <img src={image} alt="Screenshot of Project" />
      <h1>{title}</h1>
      <a className={style.linkToProject}>{link}</a>
      <p>{info}</p>
    </div>
  );
};

export default Project;
