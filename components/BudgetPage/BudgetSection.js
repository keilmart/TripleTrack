import BarGraphComponent from "./BarGraphComponent";
import PieChartComponent from "./PieChartComponent";

const BudgetSection = ({
  data,
  sectionTitle,
  filterCondition,
  legend = false,
  showPieChart = false,
  showBarGraph = false,
}) => {
  const formatValue = (value) => {
    if (typeof value === "number") {
      const formattedValue = value.toFixed(0);
      return {
        value: formattedValue,
        class: value < 0 ? "text-red-400" : "text-green-400",
      };
    }
    return { value, class: "" };
  };

  // console.log("BudgetSection Data:", data);

  return (
    <div className="w-full">
      <h2 className="mt-6 mb-4 text-xl font-semibold md:text-3xl">{sectionTitle}</h2>
      {legend && (
        <div className="flex space-x-16 my-7">
          <div className="flex">
            <div className="bg-[#6d83f2] w-5 h-5 rounded-full m-auto"></div>
            <p className="ml-5">Spent</p>
          </div>
          <div className="flex">
            <div className="bg-[#bdc8ff] w-5 h-5 rounded-full m-auto"></div>
            <p className="ml-6">Remaining</p>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {data
          .filter(filterCondition)
          .filter((row) => (row.Category || "").trim() !== "")
          .map((row, index) => (
            <div
              key={index}
              className="flex flex-col-reverse py-10 mb-6 transition duration-500 ease-in-out bg-gray-100 rounded-lg sm:justify-between sm:flex-row px-7 hover:shadow-lg hover:scale-105 dark:bg-darkModeDetail">
              <div>
                <p className="text-2xl font-semibold">{row.Category}</p>
                {row["Goal Amount"] !== "" && (
                  <p
                    className={`${
                      row["Goal Amount"] < 0
                        ? "text-red-400"
                        : "text-black dark:text-yellow-50"
                    }`}>
                    <strong className="display-text-group">Goal Amount:</strong> $
                    {formatValue(row["Goal Amount"]).value}
                  </p>
                )}
                {row["Total Amount"] !== "" && (
                  <p
                    className={`${
                      row["Total Amount"] < row["Goal Amount"]
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-400"
                    }`}>
                    <strong className="display-text-group">Total Amount: </strong> $
                    {formatValue(row["Total Amount"]).value}
                  </p>
                )}
                {row["Difference"] !== "" && (
                  <p
                    className={`${
                      row["Difference"] < 0
                        ? "text-red-400"
                        : "text-green-600 dark:text-green-400"
                    }`}>
                    <strong className="display-text-group">Difference:</strong> $
                    {formatValue(row["Difference"]).value}
                  </p>
                )}
                {row["Total Amount"] !== "" && row["Goal Amount"] !== "" && (
                  <p
                    className={`${
                      row["Total Amount"] > row["Goal Amount"]
                        ? "text-red-400"
                        : "text-green-600 dark:text-green-400"
                    }`}>
                    <strong className="display-text-group">Percentage:</strong>{" "}
                    {((row["Total Amount"] / row["Goal Amount"]) * 100).toFixed(0)}%
                  </p>
                )}
                {Object.entries(row)
                  .filter(
                    ([key, value]) =>
                      key !== "" &&
                      value !== "" &&
                      key !== "Category" &&
                      key !== "Total Amount" &&
                      key !== "Goal Amount" &&
                      key !== "Difference" &&
                      key !== "Percentage Used"
                  )
                  .map(([key, value], idx) => {
                    const { value: formattedValue, class: textColorClass } =
                      formatValue(value);
                    return (
                      <p key={idx} className={textColorClass}>
                        <strong>{key}:</strong> {formattedValue}
                      </p>
                    );
                  })}
              </div>
              {showPieChart && (
                <PieChartComponent
                  pieChartCategory={row.Category}
                  percentageUsed={(
                    (row["Total Amount"] / row["Goal Amount"]) *
                    100
                  ).toFixed(0)}
                />
              )}
              {showBarGraph && (
                <BarGraphComponent
                  data={[
                    { name: "Total Amount", value: row["Total Amount"] },
                    { name: "Goal Amount", value: row["Goal Amount"] },
                    // { name: "Difference", value: row["Difference"] },
                  ]}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default BudgetSection;
