import { PropsWithChildren } from "react";

function Form({ children }:PropsWithChildren) {
  return (
    <div className="flex flex-col forms-container bg-slate-300 rounded m-4 h-fit">
      <div className="flex basic-form m-2 md:m-0 flex-col">{children}</div>
    </div>
  );
}
export default Form;
