import React from "react";
import "./styles.css";
import rocket from "../../assets/rocket3.png";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import onoff from "../../assets/onoff.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: onoff,
};

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
              <Link to="/dash">Entrar</Link>
            </button>
          </form>
        </section>
        <div style={{ width: 50 + "%" }}>
          <Lottie
            options={defaultOptions}
            style={{ width: 200 + "px", height: 200 + "px" }}
          />
        </div>
        {/* <img src={rocket} alt="RocketSeat" /> */}
      </div>
    </>
  );
}
