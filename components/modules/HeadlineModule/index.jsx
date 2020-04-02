/* styles */
import style from "./index.scss";

const HeadlineModule = ({ title }) => {
  return (
    <div className={style.root}>
      <h1>{title}</h1>
    </div>
  );
};

export default HeadlineModule;
