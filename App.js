/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {Appbar, Button, Modal, Portal, Text} from 'react-native-paper';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content title="Vehicle Management" subtitle="Hi!" />
      </Appbar.Header>
      <Portal>
        <Modal visible={visible} onDismiss={() => setVisible(false)}>
          <Text>Foo text in Modal</Text>
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={() => setVisible(true)}>
        Show
      </Button>
    </Fragment>
  );
};

export default App;
