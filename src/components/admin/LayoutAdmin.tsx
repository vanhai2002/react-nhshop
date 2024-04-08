import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";

const LayoutAdmin = () => {
  return (
    <>
      <div>
        <HeaderAdmin />
        <div className="container-fluid">
          <div className="row grid grid-cols-[256px_auto]">
            <Sidebar />
              <main className="col-md-9 w-full bg-[#e5e7eb] p-6 h-[full] ms-sm-auto col-lg-10 px-md-4">
                <Outlet />
              </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
