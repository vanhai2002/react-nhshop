import React from "react";
import { Link } from "react-router-dom";

const HeaderAdmin = () => {
  return (
    <>
      <div className="py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
        <button
          type="button"
          className="text-lg text-gray-900 font-semibold sidebar-toggle"
        >
          <i className="ri-menu-line" />
        </button>
        <ul className="ml-auto flex items-center">
          <div className="text-sm font-medium text-gray-400 mr-6">
            <Link
              to="add"
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              Thêm sản phẩm
            </Link>
          </div>

          <li className="dropdown ml-3">
            <button type="button" className="dropdown-toggle flex items-center">
              <div className="flex-shrink-0 w-10 h-10 relative">
                <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg"
                    alt=""
                  />
                  <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping" />
                  <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full" />
                </div>
              </div>
              <div className="p-2 md:block text-left">
                <h2 className="text-sm font-semibold text-gray-800">
                  John Doe
                </h2>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </button>
            <ul
              className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]"
              data-popper-id="popper-2"
              data-popper-placement="bottom-end"
              style={{
                position: "absolute",
                inset: "0px 0px auto auto",
                margin: 0,
                transform: "translate3d(-24px, 247.2px, 0px)",
              }}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50"
                >
                  Settings
                </a>
              </li>
              <li>
                <form method="POST">
                  <a
                    role="menuitem"
                    className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50 cursor-pointer"
                  >
                    Log Out
                  </a>
                </form>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderAdmin;
