import DefaultLayout from "../components/layouts/DefaultLayout";
import style from "../components/layouts/DefaultLayout/index.scss";

/* This route gets hit by default, e.g. your-site.com */
const DefaultPage = () => {
  return (
    <DefaultLayout>
      <div className={style.headlineWrapper}>
        <h1>H. Eva Thorisdottir</h1>
        <a href="/welcome"> ->Visit a Slug Page </a>
      </div>
      <div className={style.contentWrapper}>
        <a id={style.myWorkLink} href="/work">
          My Work
        </a>
        <a id={style.contactLink} href="/contact">
          Contact Me
        </a>
      </div>
    </DefaultLayout>
  );
};

export default DefaultPage;
