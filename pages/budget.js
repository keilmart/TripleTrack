import Layout from "../components/Layout/Layout";
import BudgetPage from "../components/BudgetPage/BudgetPage";
import SEO from "../components/SEO/SEO";

const Budget = () => {
  return (
    <Layout wide={true}>
      <SEO />
      <BudgetPage />
    </Layout>
  );
};

export default Budget;
