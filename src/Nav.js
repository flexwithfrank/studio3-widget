import React from "react";

const styles = {
    width:100,
    padding:20,
};

const Nav = () => {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://studio3-seattle.framer.website/welcome-to-studio3" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img style={styles} target="_blank" rel="noopener noreferrer"
              src="https://framerusercontent.com/images/tKc8viqJIGng2lVPhduGRVesrM.svg"
              class="h-2"
              alt="Studio3 Logo"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
