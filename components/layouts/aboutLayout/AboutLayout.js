import style from "./index.scss";

const AboutLayout = props => {
  return <div className={style.aboutWrapper}>{props.children}</div>;
};

export default AboutLayout;
