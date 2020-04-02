import style from "./index.scss";
import resets from "./styleReset.scss";

import Head from "../../common/Head";

const DefaultLayout = props => {
  const title = "Eva Thorisdottir";
  const description = "Portfolio page";

  return (
    <div className={(resets, style.root)}>
      <div className={style.pageWrapper}>
        <Head title={title} description={description} />
        <div className={style.headlineWrapper}>
          <h1>
            H. Eva
            <br /> Thorisdottir
          </h1>
          <h2>Frontend developer</h2>
        </div>
        <div className={style.contentWrapper}>{props.children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
