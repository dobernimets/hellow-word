import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TaskWhereInput = {
  dodogo?: StringNullableFilter;
  id?: StringFilter;
  momo?: StringNullableFilter;
};
