import { resumeType } from "../../types";
import Input from "../Input";
import AddButton from "./AddButton"; // Nie ma potrzeby importować typu AddButtonType, ponieważ nie jest używany bezpośrednio w komponencie SchoolForm
import Form from "./Form";

export type FormProps = {
  onInputChange: (value: string, name: string) => void;
  onClickHandler: () => void; // Poprawiony typ dla onClickHandler
  isEditing:boolean,
  output:resumeType,
};

export default function SchoolForm({
  onInputChange,
  onClickHandler,
  isEditing,
  output,
}: FormProps) {
  return (
    <Form>
      <Input
        onInputChange={onInputChange}
        name="uniname"
        placeholder="Warsaw university"
        value={output.uniname} // Ustawienie value dla Input
        isEditing={isEditing}
      />
      <Input
        onInputChange={onInputChange}
        name="major"
        placeholder="Information Technology"
        value={output.major} // Ustawienie value dla Input
        isEditing={isEditing}
      />
      <Input
        onInputChange={onInputChange}
        name="studyYears"
        placeholder="2017-2020"
        value={output.studyYears} // Ustawienie value dla Input
        isEditing={isEditing}
      />
      <AddButton onClickHandler={onClickHandler} />
    </Form>
  );
}
