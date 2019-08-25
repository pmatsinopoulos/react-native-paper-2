/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {Appbar, ToggleButton} from 'react-native-paper';

const App = () => {
  const [value, setValue] = useState('left');

  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content title="Vehicle Management" subtitle="Hi!" />
      </Appbar.Header>
      <ToggleButton.Group
        onValueChange={newValue => setValue(newValue)}
        value={value}>
        <ToggleButton value="left" icon="format-align-left" />
        <ToggleButton value="right" icon="format-align-right" />
      </ToggleButton.Group>
    </Fragment>
  );
};

export default App;
