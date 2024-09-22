"use client";
import BarChartCard from "../UI/Charts/BarChartCard";
import Chart6 from "../UI/Charts/Chart6";
import GaugeCard from "../UI/Charts/GaugeCard";
import LineChartCard from "../UI/Charts/LineChartCard";
import MultiSeriesPieChartCard from "../UI/Charts/MultiSeriesPie";
import MultiValuePieCard from "../UI/Charts/MultiValuePieCard";
import ChartsPanel from "./body/ChartsPanel";
import Header from "./body/Header";


const Body = () => {
  return (
    <section className="w-full self-start">
      <Header />
      <div className="flex items-start">
        <ChartsPanel />
        <div className="mt-2 ml-2 mb-2 flex flex-col gap-2">
          <div className="flex items-stretch gap-2">
            <GaugeCard />
            <BarChartCard
              title="Card title"
              description="Description"
              data={[65000, 75000, 60000, 65000, 60000, 95000]}
              labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
            />
            <LineChartCard
              title="Chart 3"
              description="Multi-line chart example."
              data1={[50000, 60000, 25000, 80000, 90000, 30000]}
              data2={[40000, 45000, 42000, 50000, 60000, 70000]}
              labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
            />
          </div>
          <div className="flex items-stretch gap-2">
            <MultiSeriesPieChartCard
              title="Chart 4"
              description="Description"
            />
            <MultiValuePieCard
              title="Chart 4"
              description="Description"
              dataValues={[60, 20, 5, 8, 7]}
              dataLabels={["60%", "20%", "5%", "8%", "7%"]}
            />
            <Chart6 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
