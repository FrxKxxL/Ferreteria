import React, { useState } from "react";

function Catalogo() {
  const productosBase = [
    { id: 1, name: "Taladro Makita HP1630", brand: "Makita", type: "Eléctricas", price: 2380 },
    { id: 2, name: "Martillo DeuTec Pro", brand: "DeuTec", type: "Manuales", price: 850 },
    { id: 3, name: "Sierra Bosch Circular", brand: "Bosch", type: "Eléctricas", price: 3200 },
    { id: 4, name: "Llave Milwaukee Premium", brand: "Milwaukee", type: "Manuales", price: 1200 },
    { id: 5, name: "Pulidora DeuTec X2", brand: "DeuTec", type: "Eléctricas", price: 1800 },
    { id: 6, name: "Destornillador Bosch Set", brand: "Bosch", type: "Manuales", price: 650 },
  ];

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const toggle = (value, state, setState) => {
    setState(
      state.includes(value)
        ? state.filter((v) => v !== value)
        : [...state, value]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedTypes([]);
  };

  const filtered = productosBase.filter((p) => {
    const b = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
    const t = selectedTypes.length === 0 || selectedTypes.includes(p.type);
    return b && t;
  });

  return (
    <>
      <style>{`
        /* 🔥 FIX GLOBAL SIN MÁRGENES */
        html, body, #root {
          margin:0;
          padding:0;
          width:100%;
          overflow-x:hidden;
          background:#F4F5F7;
        }

        *{
          box-sizing:border-box;
          font-family:Segoe UI;
        }

        /* 🔥 LAYOUT FULL WIDTH REAL */
        .catalogo{
          display:grid;
          grid-template-columns:280px 1fr;
          width:100%;
          min-height:100vh;
          margin:0;
          padding:0;
          background:#F4F5F7;
        }

        /* SIDEBAR */
        .sidebar{
          background:#2C2C2C;
          padding:20px;
          color:white;
        }

        .title{
          color:#FF7A00;
          font-weight:bold;
          margin:15px 0 10px;
        }

        label{
          display:block;
          margin:6px 0;
          cursor:pointer;
          font-size:14px;
        }

        input{
          margin-right:8px;
        }

        /* BOTONES NARANJA */
        .btn{
          width:100%;
          margin-top:20px;
          padding:12px;
          border:none;
          cursor:pointer;
          border-radius:6px;
          background:#FF7A00;
          color:black;
          font-weight:bold;
          transition:.2s;
        }

        .btn:hover{
          transform:scale(1.03);
        }

        /* MAIN */
        .main{
          padding:20px;
          width:100%;
        }

        .grid{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:20px;
          width:100%;
        }

        .card{
          background:white;
          padding:15px;
          border-radius:8px;
          transition:.2s;
        }

        .card:hover{
          transform:translateY(-3px);
        }

        /* PLACEHOLDER IMAGEN */
        .img{
          width:100%;
          height:160px;
          background:#ddd;
          border-radius:6px;
        }

        .name{
          font-weight:bold;
          margin:10px 0;
          color:#1A1A1A;
        }

        /* PRECIOS NEGRO */
        .price{
          color:#000;
          font-weight:bold;
        }

        /* BOTÓN AÑADIR CON ANIMACIÓN */
        .add{
          width:100%;
          margin-top:10px;
          padding:10px;
          border:none;
          background:#FF7A00;
          color:black;
          font-weight:bold;
          cursor:pointer;
          border-radius:6px;
          transition:.2s;
        }

        .add:hover{
          transform:scale(1.06);
          background:#ff8c1a;
        }

        /* RESPONSIVE */
        @media(max-width:900px){
          .catalogo{
            grid-template-columns:1fr;
          }

          .grid{
            grid-template-columns:repeat(2,1fr);
          }
        }

        @media(max-width:600px){
          .grid{
            grid-template-columns:1fr;
          }
        }
      `}</style>

      <div className="catalogo">

        {/* SIDEBAR */}
        <aside className="sidebar">

          <div className="title">Marcas</div>

          {["Makita","Bosch","DeuTec","Milwaukee"].map((b)=>(
            <label key={b}>
              <input
                type="checkbox"
                checked={selectedBrands.includes(b)}
                onChange={() => toggle(b, selectedBrands, setSelectedBrands)}
              />
              {b}
            </label>
          ))}

          <div className="title">Tipos</div>

          {["Eléctricas","Manuales"].map((t)=>(
            <label key={t}>
              <input
                type="checkbox"
                checked={selectedTypes.includes(t)}
                onChange={() => toggle(t, selectedTypes, setSelectedTypes)}
              />
              {t}
            </label>
          ))}

          {/* LIMPIAR FILTROS */}
          <button className="btn" onClick={clearFilters}>
            Limpiar filtros
          </button>

        </aside>

        {/* MAIN */}
        <main className="main">

          <div className="grid">

            {filtered.map((p)=>(
              <div className="card" key={p.id}>

                {/* espacio imagen */}
                <div className="img"></div>

                <div className="name">{p.name}</div>

                <div className="price">C$ {p.price}</div>

                <button className="add">
                  AÑADIR
                </button>

              </div>
            ))}

          </div>

        </main>

      </div>
    </>
  );
}

export default Catalogo;