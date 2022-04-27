import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  time?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
