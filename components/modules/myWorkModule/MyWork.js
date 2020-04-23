import style from "./index.scss";
import { useRouter } from "next/router";

const MyWork = ({ title, image, info, link }) => {
  const router = useRouter();
  const { ptitle } = router.query;
  return (
    <div className={style.projectContainers}>
      <a href="/{ptitle}">
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
