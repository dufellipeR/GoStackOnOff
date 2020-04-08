import React from "react";
import "./styles.css";

export default function Dashboard() {
  function teste(e) {
    console.log(e);
  }
  return (
    <>
      <div className="dash-container">
        <div className="headers">
          <header>
            <h3>Meu Perfil</h3>
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
                    <div className="toggleWrapper">
                      <input
                        type="checkbox"
                        id="dn"
                        className="dn"
                        onChange={($event) => {
                          $event.persist();
                          teste($event.nativeEvent.y);
                        }}
                      />
                      <label htmlFor="dn" className="toggle">
                        <span className="toggle__handler"></span>
                      </label>
                    </div>
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
