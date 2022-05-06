import { useCallback, useEffect, useMemo, useState } from 'react';
import CardUser from '../components/CardUser/CardUser';
import { user } from '../samples/user';
import CardReport from '../components/CardReport/CardReport';
import { options } from '../samples/reports';
import { getReports } from '../services/reports';
import { ApiReport, Report, Timeframes } from '../models/reports.model';

import './styles.scss';

const DashboardContainer = () => {
  const [selected, setSelected] = useState<string>('daily');
  const [data, setData] = useState<ApiReport[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const reports = useMemo<Report[]>(
    () =>
      data
        ? data.map((report) => ({
            title: report.title,
            // ref: https://bobbyhadz.com/blog/typescript-no-index-signature-with-parameter-of-type-string
            current: report.timeframes[selected as keyof Timeframes].current,
            previous: report.timeframes[selected as keyof Timeframes].previous,
          }))
        : [],
    [data, selected]
  );

  const getData = useCallback(async () => {
    try {
      const data = await getReports();
      setData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleSelectOption = useCallback((selected: string) => {
    setSelected(selected);
  }, []);

  return (
    <div className="container-dashboard">
      {loading ? (
        <p>Cargando</p>
      ) : (
        <>
          <CardUser
            image={user.image}
            name={`${user.firstName} ${user.lastName}`}
            options={options}
            selected={selected}
            onSelectOption={handleSelectOption}
          />
          {reports.map((report) => (
            <CardReport
              title={report.title}
              hours={report.current}
              prevHours={report.previous}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default DashboardContainer;
