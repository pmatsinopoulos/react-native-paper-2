/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {Appbar, FAB, Portal} from 'react-native-paper';
const App = () => {
  const [fabGroupOpen, setFabGroupOpen] = useState(false);

  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content title="Vehicle Management" subtitle="Hi!" />
      </Appbar.Header>
      <Portal>
        <FAB.Group
          open={fabGroupOpen}
          icon={fabGroupOpen ? 'today' : 'add'}
          actions={[
            {icon: 'add'},
            {icon: 'star', label: 'Star'},
            {icon: 'email', label: 'Email'},
            {icon: 'bell', label: 'Reminder'}
          ]}
          onStateChange={({open}) => setFabGroupOpen(open)}
        />
      </Portal>
    </Fragment>
  );
};

export default App;
