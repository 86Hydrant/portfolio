/* styles */
import style from "./index.scss";

const HeadlineModule = ({ headline }) => {
  return (
    <div className={style.root}>
      <h1>{headline} :: hello headline</h1>
    </div>
  );
};

export default HeadlineModule;
