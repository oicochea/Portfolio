import React from "react";
import "./styles.css";
import Projects from "./classcomp/projects";

class App extends React.Component {
  render() {
    return (
      <>
        <body>
          <h1>Hi All, Welcome to my portfolio</h1>
          <div className="container">
            <div className="item">
              <Projects
                name={"Brewlette"}
                git={"https://github.com/oicochea/Project-1"}
                live={"https://oicochea.github.io/Project-1/"}
                img={"https://i.imgur.com/wQckcRK.png"}
                alt={"brewlette"}
              />
            </div>
            <div className="item">
              <Projects
                name={"Self-List"}
                git={"https://github.com/oicochea/Project-2"}
                live={"https://oscarproject-2.herokuapp.com/"}
                img={"https://i.imgur.com/iZhuzLG.png[/img"}
                alt={"self-list"}
              />
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default App;
