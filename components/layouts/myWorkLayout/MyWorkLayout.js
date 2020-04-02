import style from "./index.scss";
import MyWork from "../../modules/myWorkModule/MyWork";

const MyWorkLayout = props => {
  return <div className={style.myWorkWrapper}>{props.children}</div>;
};

export default MyWorkLayout;
