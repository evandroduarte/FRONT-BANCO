import React, {useState} from "react";

import "../../styles.css";

export default function TelaHome(props) {

  return (
    <div className="card-centro">
      <h2 className="informacao-ong">Home</h2>
      <p className="texto-ong">{props.data}</p>
    </div>
  );
}
