/* 🌈 This is the client side 🌈*/

/* dependencies */
import fetch from "isomorphic-unfetch";

/* Layouts */
import DefaultLayout from "../components/layouts/DefaultLayout";
import MyWorkLayout from "../components/layouts/myWorkLayout/MyWorkLayout";
import AboutLayout from "../components/layouts/aboutLayout/AboutLayout";

/* Modules */
import HeadlineModule from "../components/modules/HeadlineModule";
import ParagraphModule from "../components/modules/ParagraphModule";
import MyWork from "../components/modules/myWorkModule/MyWork";
import ImageModule from "../components/modules/ImageModule";

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
    item => item.component === "headline module"
  );

  const paragraphModuleData = content.body.find(
    item => item.component === "paragraph"
  );

  const imageModuledata = content.body.find(
    item => item.component === "image module"
  );

  const projectData = content.body.filter(item =>
    item.component.includes("ProjectContainer")
  );
  console.log(projectData);

  const modulePrinter = projectData => {
    return projectData.map((module, index) => {
      return (
        <MyWork title={module.title} image={module.image} info={module.info} />
      );
    });
  };

  return (
    <DefaultLayout>
      {codeString}

      <MyWorkLayout>{modulePrinter(projectData)}</MyWorkLayout>

      <AboutLayout>
        {imageModuledata ? (
          <ImageModule image={imageModuledata.headshot} />
        ) : null}
        {headlineModuleData ? (
          <HeadlineModule title={headlineModuleData.title} />
        ) : null}
        {paragraphModuleData ? (
          <ParagraphModule paragraph={paragraphModuleData.paragraph} />
        ) : null}
      </AboutLayout>
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
  const data = await fetchUrl(
    `https://evathorisdottir.now.sh/api/page/${page}`
  );
  /* Returning the data back into SlugPage as props */
  return { data }; /* This is the same as { data: data } */
};

export default SlugPage;
