import React from 'react';

export function Approve (props) {
    return (
        <div className="Approve">
            <button className="sure-button" type="submit">Sure</button>
            <button className="nope-button" type="submit">Nope</button>
        </div>
    );
};

Approve.defaultProps = {
    text: ''
};