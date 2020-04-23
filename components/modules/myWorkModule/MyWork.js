import style from "./index.scss";

const MyWork = ({ title, image, info, link }) => {
  return (
    <div className={style.projectContainers}>
      <a href={link}>
        <div className={style.hoverEffectContainer}>
          <img src={image} alt="Screenshot of Project" />
          <div className={style.infoContainer}>
            <h3>{title}</h3>
            <p>{info}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default MyWork;
