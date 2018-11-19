import React from "react";

export default ({action, options, className}) => (
    <select className={className} onChange={e => action(e.target.value)}>
        {
            options.map((option, index) => (
                <option value={option} key={`${option}-${index}`}>{option}</option>
            ))
        }
    </select>
);