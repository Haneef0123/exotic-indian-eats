import { ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="p-24 flex justify-center items-center">{children}</div>
      <Footer />
    </div>
  );
};
