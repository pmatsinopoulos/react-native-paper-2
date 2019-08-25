/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {View} from 'react-native';
import {Appbar, HelperText, TextInput} from 'react-native-paper';
const App = () => {
  const [email, setEmail] = useState('');

  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content title="Vehicle Management" subtitle="Hi!" />
      </Appbar.Header>
      <View>
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <HelperText type="error" visible={!email.includes('@')}>
          Email address is invalid!
        </HelperText>
      </View>
    </Fragment>
  );
};

export default App;
