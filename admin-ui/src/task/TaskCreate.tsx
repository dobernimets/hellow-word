import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="dodogo" source="dodogo" />
        <TextInput label="momo" source="momo" />
      </SimpleForm>
    </Create>
  );
};
