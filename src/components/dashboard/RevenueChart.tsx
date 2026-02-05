import React from 'react';

interface RevenueChartProps {
  title?: string;
  amount?: string;
  change?: string;
}

const RevenueChart: React.FC<RevenueChartProps> = ({
  title = "Average Monthly Income",
  amount = "$935,577",
  change = "↑ 78.09 as previous Month"
}) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
  const data = [35, 42, 55, 65, 58, 85, 48, 62]; // Heights in percentage

  return (
    <div className="revenue-chart-card">
      <div className="revenue-chart-header">
        <div>
          <h3 className="revenue-chart-title">{title}</h3>
          <div className="revenue-chart-tabs">
            <button className="revenue-tab active">Monthly</button>
            <button className="revenue-tab">Yearly</button>
          </div>
        </div>
      </div>
      
      <div className="revenue-income-value">
        <h2 className="revenue-income-amount">{amount}</h2>
        <span className="revenue-income-change">{change}</span>
      </div>

      <div className="revenue-bar-chart">
        <div className="revenue-chart-bars">
          {months.map((month, index) => (
            <div 
              key={month}
              className={`revenue-bar ${index === 5 ? 'active' : ''}`}
              style={{ height: `${data[index]}%` }}
            >
              <span className="revenue-bar-label">{month}</span>
            </div>
          ))}
        </div>
        <div className="revenue-chart-y-axis">
          <span>40K</span>
          <span>30K</span>
          <span>20K</span>
          <span>10K</span>
        </div>
      </div>
      
      <div className="revenue-chart-info">
        <span className="revenue-chart-value">39K</span>
      </div>
    </div>
  );
};

export default RevenueChart;