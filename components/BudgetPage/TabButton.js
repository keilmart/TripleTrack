import React from "react";

const TabButton = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="bg-syncWave dark:bg-darkModeDetail">
      {/* <div className="flex flex-col space-y-4 bg-syncWave max-w-[384px] w-96 min-w-[384px] p-4 dark:bg-darkModeDetail"> */}
      <div className="sticky z-10 flex flex-col p-4 space-y-4 top-14">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => onTabChange(tab.key)}
            className={`px-4 py-2 text-left rounded-lg transition ${
              activeTab === tab.key
                ? "bg-blue-500 text-white font-bold"
                : "bg-gray-100 hover:bg-blue-100"
            }`}>
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabButton;
