import { PropsWithChildren, ReactNode } from "react";
import { formType } from "../../types";

type FormColType = {
  children: ReactNode;
  isFormActive: formType;
};
function FormCol({ children, isFormActive }: FormColType) {
  return (
    <div
      className={`form-col flex flex-col ${
        isFormActive ? "w-full md:w-1/2" : "w-0"
      }`}
    >
      {children}
    </div>
  );
}
export default FormCol;
