import Homepage from "../components/Homepage/Homepage";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";

const Home = () => {
  return (
    <>
      <Layout>
        <SEO />
        <Homepage
        // featuredProjects={featuredProjects}
        // notableProjects={notableProjects}
        // comingProjects={comingProjects}
        // mobileImages={mobileImages}
        />
      </Layout>
    </>
  );
};

// export async function getStaticProps() {
//   let notableProjects = [];
//   let featuredProjects = [];
//   let comingProjects = [];
//   let mobileImages = [];
//   const allProjectData = await getProjectData();
//   const mobileImagesData = await getProjectData();
//   console.log("allProjectData", allProjectData.allProjectData);

//   try {
//     if (allProjectData.allProjectData.length > 0) {
//       allProjectData.allProjectData.forEach((project) => {
//         if (project?.comingSoon === true) {
//           comingProjects.push(project);
//         } else if (project?.personal === false) {
//           featuredProjects.push(project);
//         } else if (project?.personal === true) {
//           notableProjects.push(project);
//         } else {
//           console.log("Project not found", project);
//         }
//       });
//     }

//     if (mobileImagesData.mobileImagesData.length > 0) {
//       mobileImagesData.mobileImagesData.forEach((project) => {
//         mobileImages.push(project);
//       });
//     }
//   } catch (e) {
//     console.log(e);
//     return (props = {
//       comingProjects: [],
//       featuredProjects: [],
//       notableProjects: [],
//       mobileImages: [],
//     });
//   }

//   return {
//     props: {
//       comingProjects,
//       featuredProjects,
//       notableProjects,
//       mobileImages,
//       revalidate: 1,
//     },
//   };
// }

export default Home;
