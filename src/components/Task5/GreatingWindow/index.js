import React from 'react';

const GreatingWindow = (props) => {
    const { name } = props;

    return (
        <div className="form-container">
            <h2>Hello {name}</h2>
        </div>
    );
};

export default GreatingWindow;
