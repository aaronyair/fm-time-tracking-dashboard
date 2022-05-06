import { ApiReport } from '../models/reports.model';
import { reports } from '../samples/reports';

export const getReports = (): Promise<ApiReport[]> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(reports);
    }, 1500);
  });
