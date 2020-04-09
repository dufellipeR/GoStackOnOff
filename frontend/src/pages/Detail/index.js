import React from "react";
import "./styles.css";

export default function Detail() {
  return (
    <div className="detail-container">
      <div
        className="content"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <section className="user">
          <div id="info"></div>
        </section>
        <section className="edit">
          <h1>Altere suas informações</h1>
          <form>
            <input type="text" className="form-control" />
          </form>
        </section>
      </div>
    </div>
  );
}
