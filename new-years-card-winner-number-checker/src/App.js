import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: '結果'};
    this.inputRef = React.createRef();
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doChange(event) {
    this.input = event.target.value;
  }

  doSubmit(event) {
    this.setState({result: this.input});
    event.preventDefault();
    this.inputRef.current.value = "";
  }

  render() {
    return (
      <div className="">
        <header className="">
          <h1>年賀状当選番号チェッカー</h1>
          <h2>【２０２１年版】</h2>
        </header>
        <main>
          <section>
            <form onSubmit={this.doSubmit}>
              <label htmlFor="input_number">番号の下２桁を入力してください：</label>
              <input ref={this.inputRef} id="input_number" type="text" onChange={this.doChange} autoFocus maxLength="2" minLength="2" pattern="[0-9]{2}" size="2" required />
              <input type="submit" value="判定！" />
            </form>
          </section>
          <section>
            <p>{this.state.result}</p>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
