import React from "react";

import S from "./Layout.style";

const Layout: React.FC = ({ children }) => {
  return <S.Layout role="layout">{children}</S.Layout>;
};

export default Layout;
