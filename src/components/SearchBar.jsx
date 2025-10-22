import React from 'react'
import './SearchBar.css'

export default function SearchBar({ value = '', onChange, onClear }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search products by title…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
      <button className="btn clear" onClick={onClear} disabled={!value}>Clear</button>
    </div>
  )
}
