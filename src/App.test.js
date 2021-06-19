import React from 'react';
import { shallow, mount } from 'enzyme';

import { storeFactory } from './test/testUtils';
import App, { UnconnectedApp } from './App';

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

  test('has `secretWord` piece of state as props', () => {
    const secretWord = 'party';
    const component = setup({ secretWord });
    const secretWordProp = component.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
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

// test('`getSecretWord` runs on App mount', () => {
//   const getSecretWordMock = jest.fn();

//   const props = { success: false, guessedWords: [] };
//   // set up app component with getSecretWordMock as the getSecretWord prop
//   const store = storeFactory();
//   const wrapper = mount(
//     <UnconnectedApp
//       getSecretWord={getSecretWordMock}
//       {...props}
//       store={store}
//     />
//   );

//   // check to see if mock ran
//   const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

//   expect(getSecretWordCallCount).toBe(1);
// });
