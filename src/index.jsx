import React from "react";
import ReactDOM from "react-dom";

import "./sass/mystyles.scss";

const App = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img src="https://cdn.discordapp.com/attachments/708360756680196167/834007554681602058/Logo_WW_Sans_Fond.png" />
      </div>
      <section class="hero is-warning">
        <div class="hero-body">
          <p class="title">GoldenSunTv</p>
          <p class="subtitle"> First Anniversary</p>
        </div>
      </section>

      <iframe
        width="100%"
        height="600px"
        src="https://www.watchisup.fr/compte-a-rebours/embed/goldensuntv-2021-04-24-21-00?backgroundcolor=&color=%23ff7f00"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
