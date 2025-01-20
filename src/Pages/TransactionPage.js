import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../file/TransactionPage.css";

const TransactionPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [payment, setPayment] = useState(0);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Generate dynamic transaction ID
    const generateTransactionId = () => {
      const now = new Date();
      const id = `TR${now.getFullYear()}${(now.getMonth() + 1)
        .toString()
        .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}${now
        .getHours()
        .toString()
        .padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now
        .getSeconds()
        .toString()
        .padStart(2, "0")}`;
      setTransactionId(id);
    };

    generateTransactionId();
  }, []);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  const handleResetCart = () => {
    setCart([]);
    setTotal(0);
  };

  const handlePay = () => {
    if (payment >= total) {
      alert(`Kembalian: ${payment - total}`);
      setCart([]);
      setTotal(0);
      setPayment(0);
      navigate("/detail-transaction");
    } else {
      alert("Pembayaran kurang!");
    }
  };

  const products = [
    { id: "BR001", name: "Sikat Gigi", brand: "Oral-B", price: 5000 },
    { id: "BR002", name: "Sabun", brand: "Lifebuoy", price: 3000 },
    { id: "BR003", name: "Shampoo", brand: "Sunsilk", price: 15000 },
    { id: "BR004", name: "Pasta Gigi", brand: "Pepsodent", price: 7000 },
    { id: "BR005", name: "Handuk", brand: "Terry Palmer", price: 20000 },
    { id: "BR006", name: "Sabun Mandi Cair", brand: "Dove", price: 25000 },
    { id: "BR007", name: "Deodorant", brand: "Nivea", price: 15000 },
    { id: "BR008", name: "Sisir Rambut", brand: "Tangle Teezer", price: 8000 },
    { id: "BR009", name: "Lotion", brand: "Vaseline", price: 18000 },
    { id: "BR010", name: "Cukur Jenggot", brand: "Gillette", price: 10000 },
  ];

  return (
    <div className="transaction-container">
      <div className="transaction-header">
        <h2>No Transaksi: {transactionId}</h2>
        <a href="/" className="breadcrumb">Home / Transaksi</a>
      </div>

      <div className="search-section">
        <h3>Cari Barang</h3>
        <input type="text" placeholder="Masukkan nama barang..." />
      </div>

      <div className="search-results">
        <h3>Hasil Pencarian</h3>
        <table>
          <thead>
            <tr>
              <th>ID Barang</th>
              <th>Nama Barang</th>
              <th>Merk</th>
              <th>Harga Jual</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    className="add-button"
                    onClick={() =>
                      handleAddToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                      })
                    }
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="cart-section">
        <h3>Kasir</h3>
        <button className="reset-cart-button" onClick={handleResetCart}>
          RESET KERANJANG
        </button>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Barang</th>
              <th>Jumlah</th>
              <th>Total</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>1</td>
                <td>{item.price}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => {
                      const updatedCart = [...cart];
                      updatedCart.splice(index, 1);
                      setCart(updatedCart);
                      setTotal(total - item.price);
                    }}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="payment-section">
          <div>
            <label>Total Semua:</label>
            <span>{total}</span>
          </div>
          <div>
            <label>Bayar:</label>
            <input
              type="number"
              value={payment}
              onChange={(e) => setPayment(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Kembali:</label>
            <span>{payment >= total ? payment - total : 0}</span>
          </div>
        </div>
        <button className="pay-button" onClick={handlePay}>
          Bayar
        </button>
      </div>
    </div>
  );
};

export default TransactionPage;
