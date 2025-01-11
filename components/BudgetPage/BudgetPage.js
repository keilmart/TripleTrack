import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getGoogleSheetData } from "../../lib/dataFetch";
import Layout from "../../components/Layout/Layout";
import Profile from "../../components/Auth/Profile";
import BudgetSection from "./BudgetSection";
import TabButton from "./TabButton";

const BudgetPage = () => {
  const { isAuthenticated } = useAuth0();
  const [sheetData, setSheetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriesTab, setCategoriesTab] = useState([]);
  const [metricsTab, setMetricsTab] = useState([]);
  const [activeTab, setActiveTab] = useState("categories");
  const [showProfile, setShowProfile] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const tabs = [
    { key: "categories", label: "Categories" },
    { key: "metrics", label: "Overall Metrics" },
    { key: "singles", label: "Single expenses" },
    { key: "trip", label: "Trip Fund" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGoogleSheetData();
        setSheetData(data);

        const firstArray = [];
        const secondArray = [];
        let splitIndex = false;

        data.forEach((row) => {
          if (splitIndex || (row.Difference === "" && row["Goal Amount"] === "")) {
            splitIndex = true;
            secondArray.push(row);
          } else {
            firstArray.push(row);
          }
        });

        setCategoriesTab(firstArray);
        setMetricsTab(secondArray);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setShowProfile(true);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setShowProfile(false);
        }, 1000);
      }, 6000);
    }
  }, [isAuthenticated]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full mb-10">
        <div className="spinner"></div>
      </div>
    );
  }

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case "categories":
        return (
          <BudgetSection
            data={categoriesTab}
            showPieChart={true}
            showBarGraph={false}
            legend={true}
            sectionTitle="Categories"
            filterCondition={(row) =>
              row.Difference !== "" &&
              row["Goal Amount"] !== "" &&
              row.Category.trim() !== ""
            }
          />
        );
      case "metrics":
        return (
          <>
            <p>Compare last month with this month</p>
            <p>Compare yearly monthly average with this month</p>
            <BudgetSection
              data={metricsTab}
              showPieChart={false}
              showBarGraph={true}
              legend={false}
              sectionTitle="Yearly Target on Track"
              filterCondition={(row) =>
                (row["Goal Amount"] === "" || row.Difference === "") &&
                row.Category.trim() !== ""
              }
            />
          </>
        );
      case "singles":
        return (
          <div className="text-center">
            <h2 className="text-xl font-bold">Single Expenses</h2>
            <p>Click here to manually add entry</p>
            <p>
              Popup modal with fields to fill in Date, Description, Category, Amount,
              Split, Total (will calculate automatically)
            </p>
            <p>
              https://skwad.app/blog/is-it-safe-to-connect-your-bank-account-to-budgeting-apps
            </p>
            <p>This will be its on repo so dont have to reuse nav and footer</p>
            <p>https://skwad.app/pricing</p>
            <p>https://budgetduo.com/</p>
          </div>
        );
      case "trip":
        return (
          <div className="text-center">
            <h2 className="text-xl font-bold">Trip Fund</h2>
            <p>Coming soon...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <TabButton tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="w-full p-8 text-xl antialiased leading-relaxed tracking-tight md:my-18 text-tertiary">
        {renderActiveTabContent()}
      </div>

      {showProfile && (
        <div
          className={`absolute top-0 left-0 flex items-center justify-center w-full h-screen backdrop-blur-md transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}>
          <Profile />
        </div>
      )}
    </>
  );
};

export default BudgetPage;
