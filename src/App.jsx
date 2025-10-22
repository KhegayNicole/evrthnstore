import React, { useEffect, useState, useMemo } from 'react'
import ProductList from './components/ProductList'
import SearchBar from './components/SearchBar'
import './App.css'

const API_URL = "https://fakestoreapi.com/products";




export default function App() { 
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return products
    return products.filter(p => (p.title || '').toLowerCase().includes(q))
  }, [products, search])

  async function fetchProducts() {
    try {
      setIsLoading(true)
      setError(null)
      const res = await fetch(API_URL)
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const data = await res.json()
      setProducts(Array.isArray(data) ? data : [])
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unknown error')
    } finally {
      setIsLoading(false)
    }
  }
   
  useEffect(() => {
    console.log('App mounted — fetching products')
    fetchProducts()
   
  }, [])

  
  useEffect(() => {
    console.log('Products updated:', products.length)
  }, [products])

  function handleClear() {
    setSearch('')
  }

  return (
    <div className="app">
      <header className="header">
        <h1>EVRTHNG store</h1>
        <p className="subtitle">midterm project</p>
      </header>

      <div className="controls">
        <button className="btn" onClick={() => fetchProducts()} disabled={isLoading}>
          {isLoading ? 'Loading…' : 'Reload products'}
        </button>

        <SearchBar
          value={search}
          onChange={(v) => setSearch(v)}
          onClear={handleClear}
        />
      </div>

      {error && <div className="error">Error: {error}</div>}

      <main>
        <ProductList products={filtered} />
      </main>

      <footer className="footer">
        <small>.......</small>
      </footer>
    </div>
  )
}
