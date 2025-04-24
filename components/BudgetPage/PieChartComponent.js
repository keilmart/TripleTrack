import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const PieChartComponent = ({ percentageUsed, pieChartCategory }) => {
  const numericPercentage = Math.min(Math.max(Number(percentageUsed), 0), 100);
  const remainder = 100 - numericPercentage;
  const data = [
    { name: "Used", value: numericPercentage },
    { name: "Remaining", value: remainder },
  ];

  console.log("Pie Chart Data:", data, pieChartCategory);

  return (
    // <ResponsiveContainer width="50%" height={180}>
    // <div className="relative w-full h-full">
    <ResponsiveContainer width="100%" height="100%">
      {/* <div className="w-full h-60"> */}
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index === 0 ? "#6d83f2" : "#bdc8ff"} />
          ))}
        </Pie>
      </PieChart>
      {/* </div> */}
      {/* <div className="absolute top-1/2 left-1/2">Percentage?</div> */}
    </ResponsiveContainer>
    // </div>
  );
};

export default PieChartComponent;
