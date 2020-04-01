/* 🌈 This is the client side 🌈*/

/* dependencies */
import fetch from "isomorphic-unfetch";

/* Layouts */
import DefaultLayout from "../components/layouts/DefaultLayout";
import MyWorkLayout from "../components/layouts/myWorkLayout/MyWorkLayout";

/* Modules */
import HeadlineModule from "../components/modules/HeadlineModule";
import MyWork from "../components/modules/myWorkModule/MyWork";

/* Helper function to fetch data - do we need this as an extra function? Debatable. 😊 */
function fetchUrl(url) {
  return fetch(url).then(r => r.json());
}

/* This route gets hit when our user appends a slug to
the url and therefore the page request, e.g. your-site.com/about */
const SlugPage = ({ data }) => {
  const { content } = data;
  console.log(`🌈 I am getting this content from Storyblok`);

  const codeString = JSON.stringify(content);

  /* Data for all components on slug pages */

  const headlineModuleData = content.body.find(
    item => item.component === "Headline Module"
  );
  const myWorkModuledata = content.body.find(
    item => item.component === "project"
  );

  /*Note for Eva: þú ert að velja hvað þú sýnir eftir því hvaða data er til staðar!
þannig þetta file getur verið allar síðurnar, þú gerir layout fyrir different components
og síðan sýnir modules eftir því hvort datanu er skilað eða ekki! how cool is that! */

  return (
    <DefaultLayout>
      {/*  <p>{codeString}</p>*/}
      {headlineModuleData ? (
        <HeadlineModule headline={headlineModuleData.headline} />
      ) : null}
      {myWorkModuledata ? (
        <MyWorkLayout>
          {/*  Note for Eva: map function fyrir hvert WorkModule added to
          storyblok*/}
          <MyWork
            image={myWorkModuledata.image}
            title={myWorkModuledata.title}
            infoList={myWorkModuledata.infoList}
          />
        </MyWorkLayout>
      ) : null}
    </DefaultLayout>
  );
};

/* Before rendering, we are calling our internal API endpoint (server).
This call is hitting the code we wrote in 'pages/api/page/[slug].js' */
SlugPage.getInitialProps = async ({ query }) => {
  /* {query} is an object we receive within this method from Next,
	so that we can retrieve the slug (e.g. '/welcome') coming with the route */
  const { page } = query;
  /* Calling our internal api endpoint so that we can fetch Storyblok content
	server-side (we are on client-side here) */
  const data = await fetchUrl(`http://localhost:3000/api/page/${page}`);
  /* Returning the data back into SlugPage as props */
  return { data }; /* This is the same as { data: data } */
};

export default SlugPage;
