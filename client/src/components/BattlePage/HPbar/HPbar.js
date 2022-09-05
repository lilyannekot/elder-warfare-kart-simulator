import React from 'react';

const HPbar = ({ currentHP, maxHP }) => {

    const fullWidth = 38;

    const percentHP = currentHP/maxHP;
    const HPfill = Math.floor(fullWidth * percentHP);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={264} viewBox="0 -0.5 44 9" shape-rendering="crispEdges">
            <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
            <path stroke="#000000" d="M2 0h40M1 1h42M0 2h2M42 2h2M0 3h2M42 3h2M0 4h2M42 4h2M0 5h2M42 5h2M0 6h2M42 6h2M1 7h42M2 8h40" />
            <path stroke="#cbdbfc" d="M2 2h40M2 3h1M41 3h1M2 4h1M41 4h1M2 5h1M41 5h1M2 6h40" />
            <path stroke="#222034" d="M3 3h38M3 4h38M3 5h38" />

            // This rect is our HP that changes width across the bar depending on hp.
            <rect fill="green" x={3} y={2.5} width={HPfill} height={3} />
        </svg>
    );
}

export default HPbar;