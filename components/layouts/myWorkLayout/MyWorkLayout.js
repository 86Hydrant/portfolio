import style from "./index.scss";
import MyWork from "../../modules/myWorkModule/MyWork";

const MyWorkLayout = (props, { data }) => {
  return <div className={style.myWorkWrapper}>{props.children}</div>;
};

export default MyWorkLayout;
{
  /*{data.map(project => {
  return (
    <MyWork
      image={project.image}
      title={project.title}
      infoList={project.infoList}
    />
  );
})}*/
}
