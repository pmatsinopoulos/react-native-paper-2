/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {Appbar, Avatar, Chip} from 'react-native-paper';

const App = () => {
  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content title="Vehicle Management" subtitle="Hi!" />
      </Appbar.Header>
      <Chip
        onClose={() => console.log('closed')}
        selected={true}
        avatar={
          <Avatar.Image
            source={require('./assets/images/lion.jpg')}
            size={24}
          />
        }
        onPress={() => console.log('Pressed')}
        mode="outlined">
        Example Chip
      </Chip>
    </Fragment>
  );
};

export default App;
