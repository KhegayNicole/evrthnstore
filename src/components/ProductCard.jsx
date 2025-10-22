import React from 'react'
import './ProductCard.css'

export default function ProductCard({ product }) {
  
  function handleAddToCart() {
   
    console.log('Add to cart:', product.id)
    alert(`Added to cart: ${product.title}`)
  }

  return (
    <div className="card">
      <div className="image-wrap">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-price">${product.price.toFixed(2)}</p>
        <p className="card-desc">{product.description?.slice(0, 100)}{product.description && product.description.length > 100 ? '…' : ''}</p>
        <div className="card-actions">
          <button className="btn small" onClick={handleAddToCart}>Add to cart</button>
          <a className="link" href="#" onClick={(e) => e.preventDefault()}>Details</a>
        </div>
      </div>
    </div>
  )
}
