import style from "./index.scss";

const MyWork = ({ title, image, info }) => {
  return (
    <div className={style.projectContainers}>
      <img src={image} alt="Screenshot of Project" />
      <div className={style.infoContainer}>
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default MyWork;
