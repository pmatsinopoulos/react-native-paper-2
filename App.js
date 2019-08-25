/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {Image} from 'react-native';
import {Banner} from 'react-native-paper';

const App = () => {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
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
  );
};

export default App;
