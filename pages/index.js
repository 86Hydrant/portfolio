import DefaultLayout from "../components/layouts/DefaultLayout";
import style from "../components/layouts/DefaultLayout/index.scss";

/* This route gets hit by default, e.g. your-site.com */
const DefaultPage = () => {
  return (
    <DefaultLayout>
      <div className={style.buttonContainer}>
        <a id={style.myWorkLink} href="/myWork">
          My Work
        </a>
        <a id={style.contactLink} href="/about">
          About Me
        </a>
      </div>
    </DefaultLayout>
  );
};

export default DefaultPage;
