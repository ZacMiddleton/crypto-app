import { MetricsBar } from "./PercentageBar.styles";

const PercentageBar = ({ value1, value2, color1, color2 }) => {
    const value1Percentage = (value1 / (value1 + value2)) * 100;
    const value2Percentage = 100 - value1Percentage;
  
    return (
      <MetricsBar>
        <div
          style={{
            width: `${value1Percentage}%`,
            backgroundColor: color1,
          }}
        />
        <div
          style={{
            width: `${value2Percentage}%`,
            backgroundColor: color2,
          }}
        />
      </MetricsBar>
    );
  };

  export default PercentageBar;