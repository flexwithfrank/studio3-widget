import React from "react";


const Nav = () => {
  return (
    <div>
      <nav class=" border-gray-200">
        <div class="flex flex-wrap items-start justify-between mx-auto">
          <a
            href="https://studio3-schedule.vercel.app/"
            class="flex items-start p-4"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://framerusercontent.com/images/tKc8viqJIGng2lVPhduGRVesrM.svg"
              class="h-10"
              alt="Studio3 Logo"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
