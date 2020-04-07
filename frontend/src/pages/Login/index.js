import React from "react";
import "./styles.css";
import rocket from "../../assets/rocket2tsp.png";

export default function Login() {
  return (
    <>
      <div className="login-container">
        <section className="form">
          <form>
            <h1>Faça seu login </h1>
            <input placeholder=" Seu username" />
            <input placeholder=" Sua senha" type="password" />
            <button className="button" type="submit">
              Entrar
            </button>
          </form>
        </section>
        <img src={rocket} alt="RocketSeat" />
      </div>
    </>
  );
}
