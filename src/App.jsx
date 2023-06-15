import React, { useState, useEffect } from "react";
import ProjectList from "./components/ProjectList";
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import { useMediaQuery } from "react-responsive";
import { PacmanLoader } from 'react-spinners';
import './index.css'
import './styles.css'
const Page = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const systemPrefersDark = useMediaQuery({ query: "(prefers-color-scheme: dark)" });
  const [darkMode, setDarkMode] = useState(systemPrefersDark);

  useEffect(() => {
    setDarkMode(systemPrefersDark);
  }, [systemPrefersDark]);

  const loaderColor = darkMode ? 'white' : 'orange';
  const overlayBackground = darkMode ? 'black' : 'white';

  return (
    <div>
      {loading ? (
        <div className="loading-overlay" style={{ backgroundColor: overlayBackground }}>
          <PacmanLoader color={loaderColor} loading={loading} size={20} />
        </div>
      ) : (
        <div className={`min-h-screen p-12 ${darkMode ? "dark" : "light"}`}>
          <div className="flex justify-between">
            <div>
              <h1 className={`mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white ${darkMode ? "dark-mode-heading" : "light-mode-heading"}`}>
                Projects
              </h1>
              <p className="my-3 pb-3 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Transforming Ideas into Experiences</p>
            </div>
            <DarkModeToggle
              onChange={setDarkMode}
              isDarkMode={darkMode}
              size={60}
              speed={1.2}
            />
          </div>
          <ProjectList />
        </div>
      )}
    </div>
  );
};

export default Page;
