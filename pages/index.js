import Homepage from "../components/Homepage/Homepage";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";

const Home = () => {
  return (
    <Layout>
      <SEO />
      <Homepage />
    </Layout>
  );
};

export default Home;
