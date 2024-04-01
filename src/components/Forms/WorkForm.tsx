import Input from "../Input";
import AddButton from "./AddButton";
import Form from "./Form";
import { FormProps } from "./SchoolForm";

export default function WorkForm({
  onInputChange,
  onClickHandler,
  isEditing,
  output,
}: FormProps) {
  return (
    <Form>
      <Input
        key="company"
        onInputChange={onInputChange}
        name="company"
        placeholder="Google"
        value={output.company}
        isEditing={isEditing}
      />
      <Input
        key="position"
        onInputChange={onInputChange}
        name="position"
        placeholder="Full stack web developer"
        value={output.position}
        isEditing={isEditing}
      />
      <Input
        key="workYears"
        onInputChange={onInputChange}
        name="workYears"
        placeholder="2020-current"
        value={output.workYears}
        isEditing={isEditing}
      />
      <AddButton onClickHandler={onClickHandler} />
    </Form>
  );
}
