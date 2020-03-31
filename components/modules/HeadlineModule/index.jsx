/* styles */
import style from "./index.scss";

const HeadlineModule = ({ headline }) => {
  return (
    <div className={style.root}>
      <h1>{headline}</h1>
    </div>
  );
};

export default HeadlineModule;
