import React from 'react';

const announcer = ({ announcement }) => {
    return (
        <div style={{ display: 'inline-block', width: '20%', textAlign: 'center', fontSize: '30px'}}>
            {announcement}
        </div>
    );
}

export default announcer;