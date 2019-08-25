/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {Appbar, Searchbar, Text} from 'react-native-paper';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchbarRef = React.createRef();
  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content title="Vehicle Management" subtitle="Hi!" />
      </Appbar.Header>
      <Searchbar
        icon="search"
        ref={searchbarRef}
        placeholder="Type here to search"
        onChangeText={query => setSearchQuery(query)}
        value={searchQuery}
        onIconPress={() => {
          searchbarRef.current.focus();
        }}
      />
      <Text>{searchQuery}</Text>
    </Fragment>
  );
};

export default App;
