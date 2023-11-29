// Layout.tsx
import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  back?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, title, back }) => {
  return (
    <div>
      <Header title={title} back={back} />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
