import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  name?: string | null;
  time?: string | null;
  user?: UserWhereUniqueInput;
};
