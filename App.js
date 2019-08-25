/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {Appbar, Button, Snackbar} from 'react-native-paper';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content title="Vehicle Management" subtitle="Hi!" />
      </Appbar.Header>
      <Button onPress={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </Button>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        action={{
          label: 'Undo',
          onPress: () => {},
        }}>
        Hi there! I am a Snackbar
      </Snackbar>
    </Fragment>
  );
};

export default App;
