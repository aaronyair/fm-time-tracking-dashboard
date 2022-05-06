export interface ApiReport {
  title: string;
  timeframes: Timeframes;
}

export interface Timeframes {
  daily: TimeframeData;
  weekly: TimeframeData;
  monthly: TimeframeData;
}

export interface Report extends TimeframeData {
  title: string;
}

interface TimeframeData {
  current: number;
  previous: number;
}
