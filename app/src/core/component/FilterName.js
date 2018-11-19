import React from 'react'

export default ({ filterName, value }) => (
    <input className="CryptoListActions-search" placeholder="Search" type="text"
           onChange={(e) => filterName(e.target.value)} value={value}/>
);