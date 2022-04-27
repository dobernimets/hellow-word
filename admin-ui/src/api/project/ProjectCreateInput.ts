import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  name?: string | null;
  time?: string | null;
  user: UserWhereUniqueInput;
};
