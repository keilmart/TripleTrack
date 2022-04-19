import Link from "next/link";
import Image from "next/image";

import Layout from "../../components/Layout/Layout";

const ProjectDetails = ({ project }) => {
  return (
    <>
      <Layout>
        {console.log(projectData)}
        <main className="mt-6 sm:mt-12">
          <div className="mb-8">
            <Link href="/#work">
              <a className="border-b border-gray-700 text-secondary hover:bg-gray-100">
                &larr; Back to Projects
              </a>
            </Link>
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight md:mb-8 md:text-6xl leading-headers">
            {project.name}
          </h1>
          <div className="flex items-center space-x-8">
            <div>
              <h2 className="font-semibold text-md">Company</h2>
              <span className="text-md text-tertiary">
                {!!project.company ? project.company : "Personal"}
              </span>
            </div>
            <div>
              <h2 className="font-semibold text-md">Timeline</h2>
              <span className="text-md text-tertiary">{project.timeline}</span>
            </div>
          </div>
          <hr className="my-8 border-t-2 border-b-0 border-dotted border-primary" />
          <a
            className="relative inline-block w-full px-4 pt-4 overflow-hidden transition duration-300 ease-in-out bg-gray-100 rounded-lg sm:px-10 sm:pt-10 h-min hover:shadow-lg hover:scale-105"
            href={`https://${project.url}`}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <div className="w-full overflow-hidden rounded-t-3xl top-10">
              <Image
                src={project.imageZoom ? project.imageZoom : project.image}
                alt={project.name}
                width={2768}
                height={1450}
                // width={2886}
                // height={1886}
                // Change these sizes to optimize //
                objectFit="cover"
                objectPosition="top left"
              />
            </div>
          </a>
          <hr className="my-8 border-t-2 border-b-0 border-dotted border-primary" />
          <p>{project.description}</p>
          <div className="my-8">
            <a
              className="w-full mt-2 mr-8 btn-light sm:w-auto"
              href={`https://${project.url}`}
              target={"_blank"}
              rel={"noreferrer"}
            >
              {!!project.github ? "View Project" : "View Website"}
            </a>
            {!!project.github ? (
              <a
                className="w-full mt-2 btn-light sm:w-auto"
                href={`https://${project.github}`}
                target={"_blank"}
                rel={"noreferrer"}
              >
                View Github
              </a>
            ) : (
              <></>
            )}
          </div>
        </main>
      </Layout>
    </>
  );
};

// export async function getStaticPaths() {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default ProjectDetails;
