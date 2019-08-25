/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {Appbar, Switch} from 'react-native-paper';

const App = () => {
  const [isSwitchedOn, setIsSwitchedOn] = useState(false);

  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content title="Vehicle Management" subtitle="Hi!" />
      </Appbar.Header>
      <Switch
        value={isSwitchedOn}
        onValueChange={() => setIsSwitchedOn(prev => !prev)}
      />
    </Fragment>
  );
};

export default App;
