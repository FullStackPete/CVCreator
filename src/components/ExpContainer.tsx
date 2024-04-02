import { PropsWithChildren } from "react";

function ExpContainer({ children }: PropsWithChildren) {
  return (
    <div className="bg-slate-300 max-w-fit break-words whitespace-normal rounded m-4 h-fit">
      {children}
    </div>
  );
}

export default ExpContainer;
