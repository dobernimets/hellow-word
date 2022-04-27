import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "dodogo";

export const TaskTitle = (record: TTask): string => {
  return record.dodogo || record.id;
};
