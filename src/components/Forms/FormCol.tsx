import { PropsWithChildren, ReactNode } from "react";
type FormColType = {
  children: ReactNode;
  isFormActive: boolean;
};
function FormCol({ children, isFormActive }: FormColType) {
  return (
    <div className={`form-col flex flex-col ${isFormActive ? "w-8/12" : "w-0"}`}>
      {children}
    </div>
  );
}
export default FormCol;
