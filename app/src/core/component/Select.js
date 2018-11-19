import React from "react";

export default (props) => {
    const {action, options, className, value, defaultValues} = props;
    return (
        <select className={className} onChange={e => action({...defaultValues, [value]: e.target.value})}>
            {
                options.map((option, index) => (
                    <option value={option} key={`${option}-${index}`}>{option}</option>
                ))
            }
        </select>
    )
};