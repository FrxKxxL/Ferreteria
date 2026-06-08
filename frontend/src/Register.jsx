import React, { useState } from "react";
import vista from "./assets/vista.png";
import esconder from "./assets/esconder.png";

function Register({ setCurrentPage }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

        .register-container{
          min-height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          padding:20px;
          background:#1E1E1E;
        }

        .register-card{
          width:100%;
          max-width:450px;
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
          margin-bottom:25px;
          font-size:0.95rem;
        }

        .input-group{
          text-align:left;
          margin-bottom:15px;
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
          background:#D9D9D9;
          font-size:1rem;
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

        .register-btn{
          width:100%;
          padding:14px;
          border:none;
          border-radius:10px;
          background:#FF6B00;
          color:white;
          font-size:1rem;
          font-weight:bold;
          cursor:pointer;
          margin-top:10px;
          transition:0.3s;
        }

        .register-btn:hover{
          background:#e55f00;
        }

        .login-link{
          margin-top:20px;
          color:#666;
        }

        .login-link a{
          color:#FF6B00;
          text-decoration:none;
          font-weight:bold;
          cursor:pointer;
        }
      `}</style>

      <div className="register-container">
        <div className="register-card">

          <div className="logo">⚡🔧</div>

          <h1 className="title">FERRETERÍA FLASH</h1>

          <p className="subtitle">
            Todo lo que necesitas para construir, reparar y crear.
          </p>

          <div className="input-group">
            <label>Nombre</label>
            <input
              type="text"
              placeholder="Tu nombre"
            />
          </div>

          <div className="input-group">
            <label>Apellido</label>
            <input
              type="text"
              placeholder="Tu apellido"
            />
          </div>

          <div className="input-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div className="input-group">
            <label>Teléfono</label>
            <input
              type="tel"
              placeholder="8888-8888"
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Ingresa una contraseña"
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

          <div className="input-group">
            <label>Confirmar Contraseña</label>

            <div className="password-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirma tu contraseña"
              />

              <span
                className="toggle-password"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                <img
                  src={showConfirmPassword ? esconder : vista}
                  alt="mostrar contraseña"
                  className="password-icon"
                />
              </span>
            </div>
          </div>

          <button className="register-btn">
            CREAR CUENTA
          </button>

          <div className="login-link">
            ¿Ya tienes cuenta?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage("login");
              }}
            >
              Iniciar sesión
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

export default Register;