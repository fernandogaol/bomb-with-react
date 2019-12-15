import React from "react";
import "./style.css";

class Bomb extends React.Component {
  state = { count: 0 };

  componentDidMount() {
    this.interval = setInterval(() => {
      let newCount = this.state.count;
      console.log("second");
      this.setState({
        count: newCount + 1
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  bombCounter = () => {
    const { count } = this.state;
    if (count >= 8) {
      clearInterval(this.interval);
      return <h1 className="Boom">BOOM!!!! haha too late!</h1>;
    } else if (count % 2 === 0) {
      return <h2 className="Tick">Tick</h2>;
    } else {
      return <h3 className="Tock">Tock</h3>;
    }
  };

  render() {
    return (
      <div className="container">
        <p>{this.bombCounter()}</p>
      </div>
    );
  }
}

export default Bomb;
