import React, { Component } from 'react';
import axios from 'axios';
import TranslateForm from './components/TranslateForm';
import TranslateOutput from './components/TranslateOutput';
const key = "trnsl.1.1.20170401T074425Z.a246f2e42a791ac5.a7d303ee3c1fbca9bc85d0e97cb7a18f13999136";

class App extends Component {
  constructor() {
        super();
        this.state = {
            output: ''
        }
        this.translate = this.translate.bind(this);
  }
  translate(textToTranslate, language) {
    axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+key+'&lang='+language+'&text='+textToTranslate)
    .then((response) => {
      var output = response.data.text[0];
      this.setState({ output });
    })
    .catch((error) =>
      console.log(error)
    );
  }
  render() {
    return (
      <div className="container">
        <div className="text-center col-md-6 col-md-offset-3">
          <h2>Word Translator</h2>
          <br/><br/>
          <TranslateForm translate={this.translate}/>
          <TranslateOutput output={this.state.output} />
        </div>
      </div>
    );
  }
}

export default App;
