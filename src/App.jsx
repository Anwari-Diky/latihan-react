import { useState } from 'react'
import { produkList } from './data/produk'
import Card from './components/Card'
import './App.css'

function App() {
  const [showAvailableOnly, setShowAvailableOnly] = useState(false)

  const filteredProduk = showAvailableOnly 
    ? produkList.filter(p => p.stok > 0) 
    : produkList;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Daftar Produk</h1>
      <button 
        onClick={() => setShowAvailableOnly(!showAvailableOnly)}
        style={{ marginBottom: '20px', padding: '10px' }}
      >
        {showAvailableOnly ? 'Tampilkan Semua Produk' : 'Tampilkan Hanya Produk Tersedia'}
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProduk.length > 0 ? (
          filteredProduk.map(p => (
            <Card key={p.id} produk={p} />
          ))
        ) : (
          <p>Produk tidak ditemukan</p>
        )}
      </div>
    </div>
  )
}

export default App
