import React from "react";
export type Center = {
  children: React.ReactNode;
};
export const CenterDiv = (props: Center) => {
  return <div className="center">{props.children}</div>;
};
