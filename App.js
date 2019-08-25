/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState, useEffect} from 'react';
import {Appbar, TextInput} from 'react-native-paper';

const App = () => {
  const [emailTextInputValue, setEmailTextInputValue] = useState(null);
  const emailInputRef = React.createRef();
  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content title="Vehicle Management" subtitle="Hi!" />
      </Appbar.Header>
      <TextInput
        label="Email"
        value={emailTextInputValue}
        onChangeText={newValue => setEmailTextInputValue(newValue)}
        ref={emailInputRef}
        placeholder="Enter your email"
        mode="outlined"
      />
    </Fragment>
  );
};

export default App;
