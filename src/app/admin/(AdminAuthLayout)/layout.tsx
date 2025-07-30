import Navbar from "@/components/user/shared/Navbar";
import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      {children}
    </div>
  )
};

export default CommonLayout;
