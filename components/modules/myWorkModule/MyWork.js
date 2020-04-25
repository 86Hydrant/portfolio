import style from "./index.scss";

const MyWork = ({ title, image, info, link, githubLink }) => {
  return (
    <div className={style.projectContainers}>
      <a href={link}>
        <img src={image} alt="Screenshot of Project" />
      </a>
      <div className={style.infoContainer}>
        <h3>{title}</h3>
        <p>{info}</p>
        {githubLink ? <a href={githubLink}>Github repository</a> : null}
      </div>
    </div>
  );
};

export default MyWork;
