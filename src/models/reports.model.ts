export interface Report {
  title: string;
  timeframes: Timeframes;
}

interface Timeframes {
  daily: TimeframeData;
  weekly: TimeframeData;
  monthly: TimeframeData;
}

interface TimeframeData {
  current: number;
  previous: number;
}
