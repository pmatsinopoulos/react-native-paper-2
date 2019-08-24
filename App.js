/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {Appbar} from 'react-native-paper';

const App = () => {
  const _goBack = () => console.log('Went back');

  const _onSearch = () => console.log('Searching');

  const _onMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="search" onPress={_onSearch} />
      <Appbar.Action icon="more-vert" onPress={_onMore} />
    </Appbar.Header>
  );
};

export default App;
