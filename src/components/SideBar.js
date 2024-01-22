import { useState } from "react";
import { Link } from "react-router-dom"

export const SideBar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="items-center py-4 bg-slate-900 h-screen ease-in-out duration-300">
      <ul className="block space-y-2 py-6 text-white">
        <div className="border-b pb-3 border-black">
          <Link to="/">
            <li className="relative cursor-pointer flex space-x-2 px-6">
              <svg
                width="18"
                height="18"
                className="mt-1"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="3"
                  y="3"
                  width="4.5"
                  height="4.5"
                  rx="1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <rect
                  x="3"
                  y="10.5"
                  width="4.5"
                  height="4.5"
                  rx="1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <rect
                  x="10.5"
                  y="10.5"
                  width="4.5"
                  height="4.5"
                  rx="1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <rect
                  x="10.5"
                  y="3"
                  width="4.5"
                  height="4.5"
                  rx="1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Dashboard</span>
            </li>
          </Link>
        </div>
        <div className="border-b pb-3 border-black">
          <li
            className="relative cursor-pointer flex space-x-2 px-6"
            onClick={() => setToggle(!toggle)}>
            <svg
              width="18"
              height="18"
              className="mt-1"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="3"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Application</span>
            <div>
              {toggle ? (
                <svg
                  width="18"
                  height="18"
                  className="absolute right-4 top-1/2 transform -translate-y-2/4"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.5 6.75L9 11.25L4.5 6.75"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  className="absolute right-4 top-1/2 transform -translate-y-2/4"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.5 11.25L9 6.75L4.5 11.25"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </div>
          </li>
          <ul className={`${toggle && "hidden"} pl-12 py-3 space-y-2`}>
            <li>Commerce</li>
            <li>Analytics</li>
            <li>Crypto</li>
            <li>Helpdesk</li>
            <li>Monitoring</li>
            <li>Fitness</li>
          </ul>
        </div>
        <div className="border-b pb-3 border-black">
          <li className="relative cursor-pointer flex space-x-2 px-6">
            <svg
              width="18"
              height="18"
              className="mt-1"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="3"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Elements</span>
          </li>
        </div>

        <div className="border-b pb-3 border-black">
          <li className="relative cursor-pointer flex space-x-2 px-6">
            <svg
              width="18"
              height="18"
              className="mt-1"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="3"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Forms</span>
          </li>
        </div>

        <div className="border-b pb-3 border-black">
          <li className="relative cursor-pointer flex space-x-2 px-6">
            <svg
              width="18"
              height="18"
              className="mt-1"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="3"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Plugins</span>
          </li>
        </div>

        <div className="border-b pb-3 border-black">
          <li className="relative cursor-pointer flex space-x-2 px-6">
            <svg
              width="18"
              height="18"
              className="mt-1"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="3"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Elements</span>
          </li>
        </div>

        <div className="border-b pb-3 border-black">
          <li className="relative cursor-pointer flex space-x-2 px-6">
            <svg
              width="18"
              height="18"
              className="mt-1"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="3"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Datagrids</span>
          </li>
        </div>

        <div className="border-b pb-3 border-black">
          <li className="relative cursor-pointer flex space-x-2 px-6">
            <svg
              width="18"
              height="18"
              className="mt-1"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="3"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Settings</span>
          </li>
        </div>
      </ul>
    </div>
  );
};
