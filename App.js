/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {View} from 'react-native';
import {Appbar, RadioButton, Text} from 'react-native-paper';

const App = () => {
  const [value, setValue] = useState('first');

  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content title="Vehicle Management" subtitle="Hi!" />
      </Appbar.Header>
      <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
        <View>
          <Text>First</Text>
          <RadioButton value="first" />
        </View>

        <View>
          <Text>Second</Text>
          <RadioButton value="second" />
        </View>
      </RadioButton.Group>
    </Fragment>
  );
};

export default App;
