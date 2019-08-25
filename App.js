/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {Appbar, BottomNavigation, Text} from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;

const App = () => {
  const initialState = {
    index: 0,
    routes: [
      {key: 'music', title: 'Music', icon: 'queue-music'},
      {key: 'albums', title: 'Albums', icon: 'album'},
      {key: 'recents', title: 'Recents', icon: 'history'},
    ],
  };
  const [navigationState, setNavigationState] = useState(initialState);

  const handleIndexChange = index =>
    setNavigationState(prevState => ({...prevState, index}));

  const renderSceneMap = ({route, jumpTo}) => {
    switch (route.key) {
      case 'music':
        return MusicRoute();
      case 'albums':
        return AlbumsRoute();
      case 'recents':
        return RecentsRoute();
      default:
        console.error(`${route.key} is invalid route`);
    }
  };

  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content title="Vehicle Management" subtitle="Hi!" />
      </Appbar.Header>
      <BottomNavigation
        navigationState={navigationState}
        onIndexChange={handleIndexChange}
        renderScene={renderSceneMap}
      />
    </Fragment>
  );
};

export default App;
