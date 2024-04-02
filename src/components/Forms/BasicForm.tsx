import Input from "../Input";
import Form from "./Form";

type BasicFormProps = {
  onInputChange: (value: string, name: string) => void;
};
export default function BasicForm({ onInputChange }: BasicFormProps) {
  return (
    <Form>
      <Input
        key="name"
        onInputChange={onInputChange}
        name="name"
        placeholder="John"
      />
      <Input
        key="lastname"
        onInputChange={onInputChange}
        name="lastname"
        placeholder="Doe"
      />
      <Input
        key="desiredpos"
        onInputChange={onInputChange}
        name="desiredpos"
        placeholder="Full-stack web developer"
      />
      <Input
        onInputChange={onInputChange}
        key="phone"
        name="phone"
        placeholder="+48123456789"
      />

      <Input
        onInputChange={onInputChange}
        key="email"
        name="email"
        placeholder="example@mail.com"
      />

      <Input
        key="about"
        onInputChange={onInputChange}
        name="about"
        placeholder="About me"
        isTextArea // Ustaw flagę isTextArea dla textarea
      />
    </Form>
  );
}
