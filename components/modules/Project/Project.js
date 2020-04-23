import style from "./index.scss";
import { useRouter } from "next/router";

const Project = ({ title, image, info, link }) => {
  const router = useRouter();
  const { ptitle } = router.query;
  return (
    <div className={style.wrapper}>
      <img src={image} alt="Screenshot of Project" />
      <h1>{title}</h1>
      <a className={style.linkToProject}>{link}</a>
      <p>{info}</p>
    </div>
  );
};

export default Project;
