/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {Appbar} from 'react-native-paper';
import MyFAB from './components/MyFAB';

const App = () => {
  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content title="Vehicle Management" subtitle="Hi!" />
      </Appbar.Header>
      <MyFAB />
    </Fragment>
  );
};

export default App;
