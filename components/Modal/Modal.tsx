import { ReactNode } from "react";

const Modal = ({ show, children }: { show: boolean; children: ReactNode }) => {
  return (
    <div
      className={`fixed inset-0 z-50 min-w-screen min-h-screen justify-center items-center ${
        show ? "flex" : "hidden"
      }`}
    >
      <div className="fixed inset-0 z-[51] min-w-screen min-h-screen overflow-y-auto overflow-x-hidden bg-black/80 cursor-pointer pointer-events-none" />
      <div className="shadow-xl z-[52] w-full md:w-[400px] bg-white rounded-lg p-8">
        {children}
      </div>
    </div>
  );
};

export default Modal;
