import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            <form action="">
              <label htmlFor="">番号の下２桁を入力してください：</label>
              <input id="input_number" type="text" autoFocus maxLength="2" minLength="2" pattern="[0-9]{2}" size="2" />
              <input type="submit" value="判定！" />
            </form>
          </section>
          <section>
            <p></p>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
