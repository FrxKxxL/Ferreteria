import React from "react";

function Home() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', sans-serif;
        }

        html, body, #root {
          width: 100%;
          height: 100%;
          background: #F4F5F7;
          overflow-x: hidden;
        }

        .home {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* HEADER */
        .header {
          background: #1A1A1A;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 20px;
          flex-wrap: wrap;
        }

        .logo {
          color: #FFC107;
          font-weight: 800;
        }

        .search {
          flex: 1;
          display: flex;
          margin: 10px;
        }

        .search input {
          flex: 1;
          padding: 10px;
          border: none;
          outline: none;
        }

        .search button {
          background: #FF7A00;
          border: none;
          padding: 10px;
          cursor: pointer;
        }

        .search img {
          width: 20px;
        }

        /* NAV CENTRADO */
        .nav {
          background: #2C2C2C;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
          padding: 12px 20px;
          flex-wrap: wrap;
        }

        .nav a {
          color: white;
          text-decoration: none;
          transition: 0.2s;
          font-weight: 500;
          text-align: center;
          cursor: pointer; /* ✔ MANITA */
        }

        .nav a:hover {
          transform: scale(1.15);
          color: #FF7A00;
        }

        /* HERO */
        .hero {
          padding: 50px 20px;
          text-align: center;
          background: linear-gradient(90deg,#1A1A1A,#2C2C2C);
          color: white;
        }

        .hero h1 {
          color: #FFC107;
        }

        .hero button {
          margin-top: 15px;
          padding: 14px 25px;
          border-radius: 10px;
          border: none;
          background: #FF7A00;
          color: white;
          cursor: pointer;
          transition: 0.2s;
          font-weight: bold;
        }

        .hero button:hover {
          transform: scale(1.08);
        }

        /* CATEGORÍAS */
        .categories {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
          padding: 20px;
          flex-wrap: wrap;
        }

        .categories span {
          cursor: pointer;
          transition: 0.2s;
          font-weight: 600;
        }

        .categories span:hover {
          transform: scale(1.15);
          color: #FF7A00;
        }

        /* PRODUCTOS */
        .offers {
          padding: 20px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .card {
          background: white;
          border-radius: 10px;
          padding: 15px;
          transition: 0.2s;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .img {
          width: 100%;
          height: 180px;
          background: #ddd;
          border-radius: 8px;
          margin-bottom: 10px;
        }

        .price {
          font-weight: bold;
          color: #000;
        }

        .add {
          width: 100%;
          margin-top: 10px;
          padding: 10px;
          border: none;
          border-radius: 10px;
          background: #FF7A00;
          color: white;
          cursor: pointer;
          transition: 0.2s;
        }

        .add:hover {
          transform: scale(1.06);
        }

        /* FOOTER */
        .footer {
          margin-top: auto;
          background: #1A1A1A;
          color: white;
          text-align: center;
          padding: 20px;
        }
      `}</style>

      <div className="home">

        {/* HEADER */}
        <header className="header">
          <div className="logo">⚡ FERRETERÍA FLASH</div>

          <div className="search">
            <input placeholder="Buscar herramientas..." />
            <button>
              <img src="/src/assets/buscar.png" />
            </button>
          </div>

          <div>Hola, Usuario</div> {/* ✔ CAMBIO */}
          <div>🛒 0</div>
        </header>

        {/* NAV */}
        <div className="nav">
          <a>HERRAMIENTAS</a>
          <a>TORNILLERÍA</a>
          <a>PINTURA</a>
          <a>ELÉCTRICO</a>
          <a>FONTANERÍA</a>
          <a style={{ color: "#FFC107", fontWeight: "bold" }}>
            OFERTAS FLASH
          </a>
        </div>

        {/* HERO */}
        <div className="hero">
          <h1>¿PROYECTO EN MARCHA?</h1>
          <p>Lo pides, lo tienes. Así de Flash.</p>

          <button>VER CATÁLOGO COMPLETO</button>
        </div>

        {/* PRODUCTOS */}
        <div className="offers">
          <div className="grid">

            <div className="card">
              <div className="img"></div>
              <h3>Martillo DeuTec</h3>
              <p className="price">C$640.00</p>
              <button className="add">AÑADIR</button>
            </div>

            <div className="card">
              <div className="img"></div>
              <h3>Taladro Makita</h3>
              <p className="price">C$2,380.00</p>
              <button className="add">AÑADIR</button>
            </div>

            <div className="card">
              <div className="img"></div>
              <h3>Caja Herramientas</h3>
              <p className="price">C$1,750.00</p>
              <button className="add">AÑADIR</button>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="footer">
          Ferretería Flash © 2026
        </div>

      </div>
    </>
  );
}

export default Home;