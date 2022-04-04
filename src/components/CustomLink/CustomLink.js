import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          borderBottom: match ? "3px solid #7a00ed" : " 3px solid  #2600ff",
          color: match ? "#7a00ed" : " #2600ff",
          fontWeight: match ? "500" : "400",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
