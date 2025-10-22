import React from 'react'
import ProductCard from './ProductCard'
import './ProductList.css'

export default function ProductList({ products = [] }) {
  if (!products) return null

  if (products.length === 0) {
    return <div className="empty">No products found.</div>
  }

  return (
    <ul className="product-grid">
      {products.map(prod => (
        <li key={prod.id} className="product-item">
          <ProductCard product={prod} />
        </li>
      ))}
    </ul>
  )
}
