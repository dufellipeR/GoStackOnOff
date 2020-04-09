import React from "react";
import "./styles.css";

export default function SwitchOO({ disabled }) {
  console.log("disabled", disabled);

  let dis = "";
  if (disabled) {
    dis = "disabled";
  }

  return (
    <>
      <div className="toggleWrapper">
        <input type="checkbox" id="dn" className="dn" {...dis} />

        <label htmlFor="dn" className="toggle">
          <span className="toggle__handler"></span>
        </label>
      </div>
    </>
  );
}
