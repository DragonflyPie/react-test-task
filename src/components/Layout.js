import React from "react";
import { Outlet } from "react-router-dom";
import Button from "./Button.js";
import useList from "./useList.js";

const Layout = () => {
  const { toggleSortMethod, sortedUsers, loading } = useList();

  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>Сортировка</h2>
        <Button
          value={"по городу"}
          color={"blue"}
          onClick={() => toggleSortMethod(true)}
        />
        <Button
          value={"по компании"}
          color={"blue"}
          onClick={() => toggleSortMethod(false)}
        />
      </div>
      <div className="page-container">
        <Outlet context={[sortedUsers, loading]} />
      </div>
    </div>
  );
};

export default Layout;
