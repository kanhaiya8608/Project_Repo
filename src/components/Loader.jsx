import React from 'react';
import { PacmanLoader } from 'react-spinners';
import './Overlay';

const Loader = ({ darkMode = false, loading }) => {
    const loaderColor = darkMode ? 'white' : 'orange';
    const overlayBackground = darkMode ? 'black' : 'white';

    return (
        <div className="loading-overlay" style={{ backgroundColor: overlayBackground }}>
            <PacmanLoader color={loaderColor} loading={loading} size={20} />
        </div>
    );
};

export default Loader;
