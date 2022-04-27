import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  id: string;
  name: string | null;
  time: string | null;
  updatedAt: Date;
  user?: User;
};
