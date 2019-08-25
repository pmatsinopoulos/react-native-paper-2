/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {Appbar, Button, Dialog, Paragraph, Portal} from 'react-native-paper';

const App = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content title="Vehicle Management" subtitle="Hi!" />
      </Appbar.Header>
      <Button onPress={() => setShowDialog(true)}>Show Dialog</Button>
      <Portal>
        <Dialog visible={showDialog} onDismiss={() => setShowDialog(false)} dismissable={false}>
          <Dialog.Title>This is a title</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              This is a simple dialog
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setShowDialog(false)}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Fragment>
  );
};

export default App;
