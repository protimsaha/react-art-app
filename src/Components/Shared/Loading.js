import React from 'react';

const Loading = () => {
    return (
        <div style={{ height: '100vh' }} class="spinner-grow text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    );
};

export default Loading;