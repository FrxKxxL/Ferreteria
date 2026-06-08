import React, { useState } from "react";

function Carrito() {
  const [coupon, setCoupon] = useState("");

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Martillo DeuTec",
      sku: "SKU-001",
      price: 850,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=300",
    },
    {
      id: 2,
      name: "Taladro Industrial Pro",
      sku: "SKU-002",
      price: 2250,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1581147036324-c1c1d5f7c61f?w=300",
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.flatMap((item) => {
        if (item.id !== id) return [item];

        if (item.quantity === 1) {
          return [];
        }

        return [
          {
            ...item,
            quantity: item.quantity - 1,
          },
        ];
      })
    );
  };

  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 150 : 0;

  const discount =
    coupon.toLowerCase() === "flash10" ? 200 : 0;

  const total =
    subtotal + shipping - discount;

  const freeShippingGoal = 5000;

  const remainingForFreeShipping =
    Math.max(freeShippingGoal - subtotal, 0);

  const progressPercentage = Math.min(
    (subtotal / freeShippingGoal) * 100,
    100
  );

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:'Segoe UI',sans-serif;
        }

        html,
        body,
        #root{
          width:100%;
          min-height:100%;
          background:#F8F9FA;
          overflow-x:hidden;
        }

        body{
          background:#F8F9FA;
        }

        .cart-page{
          width:100%;
          min-height:100vh;
          background:#F8F9FA;
        }

        /* HEADER */

        .header{
          position:sticky;
          top:0;
          z-index:1000;
          width:100%;
          background:#1A1A1A;
          padding:15px 30px;
          box-shadow:0 3px 10px rgba(0,0,0,.15);
        }

        .header-content{
          width:100%;
          display:flex;
          align-items:center;
          gap:20px;
        }

        .logo{
          color:#FF7A00;
          font-size:1.6rem;
          font-weight:700;
          white-space:nowrap;
        }

        .search-container{
          flex:1;
          display:flex;
        }

        .search-input{
          flex:1;
          border:none;
          outline:none;
          padding:12px;
          border-radius:6px 0 0 6px;
          font-size:15px;
          background:white;
          color:#1A1A1A;
        }

        .search-input::placeholder{
          color:#757575;
        }

        .search-button{
          border:none;
          outline:none;
          cursor:pointer;
          background:#FF7A00;
          padding:0 20px;
          border-radius:0 6px 6px 0;

          display:flex;
          align-items:center;
          justify-content:center;

          min-width:60px;
        }

        /* Cuando agregues buscar.png */
        .search-icon{
          width:22px;
          height:22px;
          object-fit:contain;
        }

        .user-section{
          color:white;
          font-weight:600;
          white-space:nowrap;
        }

        .cart-indicator{
          position:relative;
          font-size:28px;
          cursor:pointer;
        }

        .cart-badge{
          position:absolute;
          top:-10px;
          right:-10px;
          width:22px;
          height:22px;
          border-radius:50%;
          background:#FFC107;
          color:black;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:12px;
          font-weight:700;
        }

        /* MAIN */

        .main-container{
          width:100%;
          margin:40px 0;
          padding:0 40px;
          display:grid;
          grid-template-columns:70% 30%;
          gap:30px;
          align-items:start;
        }

        .cart-title{
          color:#1A1A1A;
          margin-bottom:20px;
          font-size:2rem;
        }

        .free-shipping-card{
          background:#2C2C2C;
          border-radius:8px;
          padding:15px;
          margin-bottom:25px;
        }

        .shipping-text{
          color:white;
          margin-bottom:10px;
          font-size:14px;
        }

        .progress-bar{
          width:100%;
          height:10px;
          background:#444;
          border-radius:999px;
          overflow:hidden;
        }

        .progress{
          height:100%;
          background:#FFC107;
          transition:.3s;
        }

        .cart-items{
          display:flex;
          flex-direction:column;
          gap:20px;
        }

        .product-card{
          background:white;
          border-radius:8px;
          box-shadow:0 4px 6px rgba(0,0,0,.05);
          padding:20px;
          display:flex;
          gap:20px;
          position:relative;
        }

        .product-image{
          width:80px;
          height:80px;
          border-radius:8px;
          object-fit:cover;
        }

        .product-info{
          flex:1;
        }

        .product-name{
          color:#1A1A1A;
          font-weight:700;
          font-size:18px;
          margin-bottom:6px;
        }

        .product-sku{
          color:#757575;
          margin-bottom:8px;
          font-size:14px;
        }

        .product-price{
          color:#FF7A00;
          font-weight:700;
          font-size:18px;
        }
                  .quantity-section{
          display:flex;
          flex-direction:column;
          justify-content:center;
          gap:10px;
        }

        .quantity-controls{
          display:flex;
          align-items:center;
          background:#F5F5F5;
          border-radius:8px;
          overflow:hidden;
        }

        .quantity-btn{
          border:none;
          background:#F5F5F5;
          width:40px;
          height:40px;
          cursor:pointer;
          font-size:18px;
          color:#000;
          font-weight:700;
          transition:.2s;
        }

        .quantity-btn:hover{
          background:#e8e8e8;
        }

        .quantity-number{
          width:50px;
          text-align:center;
          font-weight:700;
          color:#1A1A1A;
        }

        .item-subtotal{
          min-width:120px;
          display:flex;
          align-items:center;
          justify-content:flex-end;
          font-size:20px;
          font-weight:700;
          color:#1A1A1A;
        }

        .remove-btn{
          position:absolute;
          top:12px;
          right:12px;
          border:none;
          background:none;
          cursor:pointer;
          color:#9E9E9E;
          font-size:18px;
          transition:.2s;
        }

        .remove-btn:hover{
          color:#E53935;
        }

        .bottom-actions{
          margin-top:25px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          flex-wrap:wrap;
          gap:15px;
        }

        .clear-cart{
          border:none;
          background:none;
          cursor:pointer;
          color:#757575;
          font-size:15px;
          font-weight:600;
        }

        .continue-shopping{
          border:2px solid #FF7A00;
          background:transparent;
          color:#FF7A00;
          padding:12px 24px;
          border-radius:6px;
          cursor:pointer;
          font-weight:700;
          transition:.2s;
        }

        .continue-shopping:hover{
          background:#FF7A00;
          color:white;
        }

        /* SIDEBAR */

        .summary{
          background:#1A1A1A;
          color:white;
          padding:24px;
          border-radius:8px;
          position:sticky;
          top:100px;
        }

        .summary-title{
          color:#FFC107;
          margin-bottom:25px;
          font-size:1.5rem;
        }

        .summary-row{
          display:flex;
          justify-content:space-between;
          margin-bottom:15px;
        }

        .discount{
          color:#4CAF50;
          font-weight:700;
        }

        .divider{
          border:none;
          border-top:1px solid #2C2C2C;
          margin:20px 0;
        }

        .total-row{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:20px;
        }

        .total-label{
          font-size:24px;
          font-weight:700;
        }

        .total-value{
          color:#FF7A00;
          font-size:24px;
          font-weight:700;
        }

        .coupon-container{
          display:flex;
          margin-bottom:20px;
        }

        .coupon-input{
          flex:1;
          border:none;
          outline:none;
          padding:12px;
          background:#2C2C2C;
          color:white;
          border-radius:6px 0 0 6px;
        }

        .coupon-input::placeholder{
          color:#BDBDBD;
        }

        .coupon-button{
          border:1px solid #555;
          background:#2C2C2C;
          color:white;
          padding:0 15px;
          cursor:pointer;
          border-radius:0 6px 6px 0;
        }

        .checkout-button{
          width:100%;
          border:none;
          background:#FF7A00;
          color:white;
          padding:16px;
          border-radius:6px;
          font-size:18px;
          font-weight:700;
          cursor:pointer;
          transition:.2s;
        }

        .checkout-button:hover{
          transform:translateY(-2px);
        }

        /* FOOTER */

        .footer{
          background:#1A1A1A;
          color:#BDBDBD;
          padding:30px;
          margin-top:50px;
          width:100%;
        }

        .footer-content{
          width:100%;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:20px;
          flex-wrap:wrap;
        }

        .payment-methods{
          display:flex;
          gap:12px;
        }

        .payment-card{
          background:#2C2C2C;
          padding:8px 15px;
          border-radius:6px;
          color:white;
          font-size:14px;
        }

        /* MOBILE BAR */

        .mobile-checkout{
          display:none;
        }

        @media (max-width:1024px){

          .main-container{
            grid-template-columns:1fr;
          }

          .summary{
            position:static;
          }
        }

        @media (max-width:768px){

          .header{
            padding:15px;
          }

          .header-content{
            flex-wrap:wrap;
          }

          .main-container{
            padding:0 15px;
          }

          .product-card{
            flex-direction:column;
          }

          .item-subtotal{
            justify-content:flex-start;
          }

          .bottom-actions{
            flex-direction:column;
            align-items:stretch;
          }

          .continue-shopping{
            width:100%;
          }

          .mobile-checkout{
            display:flex;
            position:fixed;
            left:0;
            right:0;
            bottom:0;
            background:#1A1A1A;
            padding:15px;
            justify-content:space-between;
            align-items:center;
            box-shadow:0 -3px 15px rgba(0,0,0,.25);
            z-index:999;
          }

          .mobile-total{
            color:white;
            font-weight:700;
          }

          .mobile-total span{
            color:#FF7A00;
          }

          .mobile-buy{
            border:none;
            background:#FF7A00;
            color:white;
            padding:12px 20px;
            border-radius:6px;
            font-weight:700;
            cursor:pointer;
          }

          .footer{
            padding-bottom:90px;
          }
        }
      `}</style>

      <div className="cart-page">

        <header className="header">
          <div className="header-content">

            <div className="logo">
              FERRETERÍA FLASH
            </div>

            <div className="search-container">
              <input
                className="search-input"
                type="text"
                placeholder="Buscar herramientas, materiales y más..."
              />

              <button className="search-button">
                <img
                  src="/src/assets/buscar.png"
                  alt="Buscar"
                  className="search-icon"
                />
              </button>
            </div>

            <div className="user-section">
              Hola, Usuario
            </div>

            <div className="cart-indicator">
              🛒

              <div className="cart-badge">
                {cartItems.length}
              </div>
            </div>

          </div>
        </header>

        <div className="main-container">

          <div>
            <h2 className="cart-title">
              Tu Carrito ({cartItems.length} productos)
            </h2>

            <div className="free-shipping-card">

              <div className="shipping-text">
                {remainingForFreeShipping > 0
                  ? `¡Estás a C$${remainingForFreeShipping.toLocaleString()} de calificar para envío gratis!`
                  : "¡Felicidades! Ya calificas para envío gratis."}
              </div>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width: `${progressPercentage}%`,
                  }}
                />
              </div>

            </div>

            <div className="cart-items">

              {cartItems.map((item) => (
                                <div
                  className="product-card"
                  key={item.id}
                >
                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    🗑️
                  </button>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="product-image"
                  />

                  <div className="product-info">

                    <div className="product-name">
                      {item.name}
                    </div>

                    <div className="product-sku">
                      {item.sku}
                    </div>

                    <div className="product-price">
                      C$
                      {item.price.toLocaleString()}
                    </div>

                  </div>

                  <div className="quantity-section">

                    <div className="quantity-controls">

                      <button
                        className="quantity-btn"
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        {item.quantity === 1
                          ? "🗑️"
                          : "-"}
                      </button>

                      <div className="quantity-number">
                        {item.quantity}
                      </div>

                      <button
                        className="quantity-btn"
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>

                    </div>

                  </div>

                  <div className="item-subtotal">
                    C$
                    {(
                      item.price *
                      item.quantity
                    ).toLocaleString()}
                  </div>

                </div>
              ))}

            </div>

            <div className="bottom-actions">

              <button
                className="clear-cart"
                onClick={clearCart}
              >
                Vaciar Carrito
              </button>

              <button className="continue-shopping"
              onClick={() => navigate("/catalogo")}
              >
                Seguir Comprando
              </button>

            </div>

          </div>

          <aside className="summary">

            <h3 className="summary-title">
              Resumen de Compra
            </h3>

            <div className="summary-row">
              <span>Subtotal</span>

              <span>
                C$
                {subtotal.toLocaleString()}
              </span>
            </div>

            <div className="summary-row">
              <span>Envío</span>

              <span>
                C$
                {shipping.toLocaleString()}
              </span>
            </div>

            <div className="summary-row">
              <span>Descuento</span>

              <span className="discount">
                -C$
                {discount.toLocaleString()}
              </span>
            </div>

            <hr className="divider" />

            <div className="total-row">

              <div className="total-label">
                Total
              </div>

              <div className="total-value">
                C$
                {total.toLocaleString()}
              </div>

            </div>

            <div className="coupon-container">

              <input
                type="text"
                className="coupon-input"
                placeholder="Código de cupón"
                value={coupon}
                onChange={(e) =>
                  setCoupon(e.target.value)
                }
              />

              <button className="coupon-button">
                Aplicar
              </button>

            </div>

            <button className="checkout-button">
              PROCESAR COMPRA
            </button>

          </aside>

        </div>

        <footer className="footer">

          <div className="footer-content">

            <div>
              © 2026 Ferretería Flash.
              Todos los derechos reservados.
            </div>

            <div className="payment-methods">

              <div className="payment-card">
                Visa
              </div>

              <div className="payment-card">
                Mastercard
              </div>

              <div className="payment-card">
                PayPal
              </div>

            </div>

          </div>

        </footer>

        <div className="mobile-checkout">

          <div className="mobile-total">
            Total:
            <span>
              {" "}
              C$
              {total.toLocaleString()}
            </span>
          </div>

          <button className="mobile-buy">
            Comprar
          </button>

        </div>

      </div>
    </>
  );
}

export default Carrito;