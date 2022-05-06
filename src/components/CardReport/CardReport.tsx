import './styles.scss';

interface CardReportProps {
  title: string;
  hours: number;
  prevHours: number;
}

const CardReport = ({ title, hours, prevHours }: CardReportProps) => {
  const icon = title.toLowerCase().replace(' ', '-');
  const backgroundImage = `url("images/icon-${icon}.svg")`;

  return (
    <div className={`component-cardreport ${icon}`} style={{ backgroundImage }}>
      <div className="report">
        <h3>{title}</h3>
        <div className="data">
          <h1>{hours}hrs</h1>
          <label>Last week - {prevHours}hrs</label>
        </div>
      </div>
    </div>
  );
};

export default CardReport;
