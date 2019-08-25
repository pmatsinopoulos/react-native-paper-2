/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {Appbar, IconButton, Colors} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content title="Vehicle Management" subtitle="Hi!" />
      </Appbar.Header>
      <IconButton
        icon={({size, color}) => (
          <MaterialCommunityIcons name="av-timer" size={size} color={color} />
        )}
        color={Colors.red500}
        size={20}
      />
    </Fragment>
  );
};

export default App;
