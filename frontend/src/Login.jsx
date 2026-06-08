import React, { useState } from "react";
import vista from "./assets/vista.png";
import esconder from "./assets/esconder.png";

function Login({ setCurrentPage }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <style>{`
        html,
        body,
        #root{
          margin:0;
          padding:0;
          width:100%;
          min-height:100vh;
          background:#1E1E1E;
        }

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:'Segoe UI', sans-serif;
        }

        .login-container{
          min-height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          padding:20px;
          background:#1E1E1E;
        }

        .login-card{
          width:100%;
          max-width:420px;
          background:white;
          padding:40px;
          border-radius:20px;
          box-shadow:0 8px 25px rgba(0,0,0,0.15);
          text-align:center;
        }

        .logo{
          font-size:2rem;
          margin-bottom:10px;
        }

        .title{
          color:#121212;
          font-size:1.8rem;
          font-weight:bold;
          margin-bottom:8px;
        }

        .subtitle{
          color:#666;
          margin-bottom:30px;
          font-size:0.95rem;
        }

        .input-group{
          text-align:left;
          margin-bottom:18px;
        }

        .input-group label{
          display:block;
          margin-bottom:8px;
          font-weight:600;
          color:#333;
        }

        .input-group input{
          width:100%;
          padding:14px;
          padding-right:50px;
          border:none;
          border-radius:10px;
          outline:none;
          font-size:1rem;
          background:#D9D9D9;
          color:#333333;
          caret-color:#555555;
        }

        .input-group input::placeholder{
          color:#777777;
        }

        .password-container{
          position:relative;
        }

        .toggle-password{
          position:absolute;
          right:15px;
          top:50%;
          transform:translateY(-50%);
          cursor:pointer;
          user-select:none;
        }

        .password-icon{
          width:22px;
          height:22px;
          object-fit:contain;
          display:block;
        }

        .login-btn{
          width:100%;
          padding:14px;
          border:none;
          border-radius:10px;
          background:#FF6B00;
          color:white;
          font-size:1rem;
          font-weight:bold;
          cursor:pointer;
          transition:0.3s;
          margin-top:10px;
        }

        .login-btn:hover{
          background:#e55f00;
        }

        .register-link{
          margin-top:20px;
          color:#666;
        }

        .register-link a{
          color:#FF6B00;
          text-decoration:none;
          font-weight:bold;
          cursor:pointer;
        }
      `}</style>

      <div className="login-container">
        <div className="login-card">

          <div className="logo">⚡🔧</div>

          <h1 className="title">FERRETERÍA FLASH</h1>

          <p className="subtitle">
            Todo lo que necesitas para construir, reparar y crear.
          </p>

          <div className="input-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
              />

              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img
                  src={showPassword ? esconder : vista}
                  alt="mostrar contraseña"
                  className="password-icon"
                />
              </span>
            </div>
          </div>

          <button className="login-btn">
            INICIAR SESIÓN
          </button>

          <div className="register-link">
            ¿No tienes cuenta?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage("register");
              }}
            >
              Crear cuenta
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

export default Login;