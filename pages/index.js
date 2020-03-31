import DefaultLayout from "../components/layouts/DefaultLayout";
import style from "../components/layouts/DefaultLayout/index.scss";

/* This route gets hit by default, e.g. your-site.com */
const DefaultPage = () => {
  return (
    <DefaultLayout>
      <div className={style.headlineWrapper}>
        <h1>
          H. Eva
          <br /> Thorisdottir
        </h1>
        {/* <a href="/about"> ->Visit a Slug Page </a>*/}
        <h2>Front end developer</h2>
      </div>
      <div className={style.contentWrapper}>
        <a id={style.myWorkLink} href="/work">
          My Work
        </a>
        <a id={style.contactLink} href="/about">
          Contact Me
        </a>
      </div>
    </DefaultLayout>
  );
};

export default DefaultPage;
