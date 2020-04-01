import style from "./index.scss";

const MyWorkLayout = props => {
  return <div className={style.myWorkWrapper}>{props.children}</div>;
};

export default MyWorkLayout;
