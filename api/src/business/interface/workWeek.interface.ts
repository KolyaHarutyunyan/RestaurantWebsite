import { WorkDayStatus } from '../business.constants';

export interface IWorkHour {
  open: string;
  close: string;
}

export interface IWorkDay {
  status: WorkDayStatus;
  hours: IWorkHour[];
}

export interface IWorkWeek {
  mon: IWorkDay;
  tue: IWorkDay;
  wed: IWorkDay;
  thr: IWorkDay;
  fri: IWorkDay;
  sat: IWorkDay;
  sun: IWorkDay;
}
