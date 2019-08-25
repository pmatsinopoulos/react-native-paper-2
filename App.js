/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {Image} from 'react-native';
import {Appbar, Banner} from 'react-native-paper';

const App = () => {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content
          title="Vehicle Management"
          subtitle="Credit Card Transaction"
        />
      </Appbar.Header>
      <Banner
        visible={bannerVisible}
        actions={[
          {
            label: 'Fix it',
            onPress: () => setBannerVisible(false),
          },
          {
            label: 'Learn More',
            onPress: () => setBannerVisible(false),
          },
        ]}
        image={({size}) => (
          <Image
            source={{uri: `https://via.placeholder.com/${size}`}}
            style={{width: size, height: size}}
          />
        )}>
        There was a problem processing a transaction on your credit card
      </Banner>
    </Fragment>
  );
};

export default App;
