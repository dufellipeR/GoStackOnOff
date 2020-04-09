import React from "react";
import "./styles.css";
import SwitchOO from "../../components/SwitchOO";
import { Link } from "react-router-dom";

export default function Dashboard() {
  function teste(e) {
    console.log(e);
  }
  return (
    <>
      <div className="dash-container">
        <div className="headers">
          <header>
            <Link to="/detail">Meu Perfil</Link>
          </header>
        </div>
        <div className="content">
          <h1>Painel Principal</h1>
          <h4>Você</h4>
          <section className="me">
            <ul>
              <li>
                <div className="card">
                  <div className="card-body">
                    <span> Eduardo</span>
                    <SwitchOO />
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <h4>Seus colegas</h4>
          <section className="team">
            <ul>
              <li>
                <div className="card">
                  <div className="card-body">Arthur</div>
                </div>
              </li>
              <li>
                <div className="card">
                  <div className="card-body">Fernando</div>
                </div>
              </li>
              <li>
                <div className="card">
                  <div className="card-body">Erico</div>
                </div>
              </li>
              <li>
                <div className="card">
                  <div className="card-body">José</div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
