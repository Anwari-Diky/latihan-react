const Card = ({ produk }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>{produk.nama}</h3>
      <p>Harga: Rp {produk.harga.toLocaleString()}</p>
      <p>Stok: {produk.stok === 0 ? <strong>Habis</strong> : produk.stok}</p>
    </div>
  );
};

export default Card;
