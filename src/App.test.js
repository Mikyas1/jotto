import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from './test/testUtils';
import App from './App';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

// test('renders learn react link', () => {
//   // render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });

describe('redux props', () => {
  test('has success piece of state as props', () => {
    const success = false;
    const component = setup({ success });
    const successProp = component.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('has guessedWords piece of state as props', () => {
    const guessedWords = [
      {
        guessedWord: 'train',
        lettersMatchedCount: 3,
      },
    ];
    const component = setup({ guessedWords });
    const guessedWordsProp = component.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });

  test('`getSecretWord` action creator is a function prop', () => {
    const component = setup({});
    const getSecretWordProp = component.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});
