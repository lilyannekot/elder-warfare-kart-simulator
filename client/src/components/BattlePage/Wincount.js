import React from 'react';

const wincount = ({ wins }) => {
    return (
        <h1 style={{top: '0px', textAlign: 'center', fontSize: '30px'}}>
           Wins: {wins}
        </h1>
    );
}

export default wincount;