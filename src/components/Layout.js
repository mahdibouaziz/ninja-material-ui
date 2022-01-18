import React from "react";

const pageStyle = {
  backgroundColor: "#f9f9f9",
  width: "100%",
};

const Layout = ({ children }) => {
  return (
    <div>
      <div style={pageStyle}>{children}</div>
    </div>
  );
};

export default Layout;
