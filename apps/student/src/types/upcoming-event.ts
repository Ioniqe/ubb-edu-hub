// format(parseISO('2019-02-11T14:00:00'), 'MM/dd/yyyy')
export type UpcomingEvent = {
  title: string;
  type: string; // EXAM, ASSIGNMENT, ...
  date: string;
};
