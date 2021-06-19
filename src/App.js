import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import { getSecretWord } from './actions';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[{ guessedWord: 'train', letterMatchCount: 4 }]}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ success, guessedWords }) => {
  return {
    success,
    guessedWords,
  };
};

export default connect(mapStateToProps, { getSecretWord })(App);
