/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {Appbar, ProgressBar, Colors} from 'react-native-paper';

const App = () => {
  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content title="Vehicle Management" subtitle="Hi!" />
      </Appbar.Header>
      <ProgressBar progress={0.5} color={Colors.red500} />
    </Fragment>
  );
};

export default App;
