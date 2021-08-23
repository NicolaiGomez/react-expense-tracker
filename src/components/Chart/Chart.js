import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const totalMax = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
            key={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
