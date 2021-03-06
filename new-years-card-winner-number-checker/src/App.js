import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {result: ''};
    this.inputRef = React.createRef();
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doChange(event) {
    this.input = event.target.value;
  }

  doSubmit(event) {
    const firstPrize = "757462";
    const secondPrize = "6335";
    const thirdPrize = ["60", "58", "50"];

    const inputNumber = this.input;

    if (firstPrize.substring(4) === inputNumber) {
      this.setState({result: `１等かも！？（当選番号は ${firstPrize} です）`});
    } else if (secondPrize.substring(2) === inputNumber) {
      this.setState({result: `２等かも！？（当選番号は **${secondPrize} です）`});
    } else if (thirdPrize[0] === inputNumber
               || thirdPrize[1] === inputNumber
               || thirdPrize[2] === inputNumber)
    {
      this.setState({result: `３等が当たりました！（当選番号は ****${inputNumber} です）`});
    } else {
      this.setState({result: `${inputNumber}はハズレです…`});
    }

    event.preventDefault();
    this.inputRef.current.value = "";
  }

  render() {
    return (
      <div className="App">
        <Jumbotron>
          <header>
            <h1>年賀状当選番号<br className="d-block d-md-none" />チェッカー</h1>
            <h2>【２０２１年版】</h2>
          </header>
        </Jumbotron>
        <main>
          <section className="mb-4">
            <form onSubmit={this.doSubmit}>
              <label htmlFor="input_number">
                番号の下２桁を入力してください：
              </label>
              <input
                ref={this.inputRef}
                id="input_number"
                type="number"
                onChange={this.doChange}
                autoFocus
                min="0"
                max="99"
                required
              />
              <input type="submit" value="判定！" />
            </form>
          </section>
          <section>
            <p>{this.state.result}</p>
          </section>
        </main>
        <footer>
          <p>Copyright (C) 2021 Totuus1157 All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
