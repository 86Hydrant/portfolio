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
        {props.children}
      </div>
    </div>
  );
};

export default DefaultLayout;
