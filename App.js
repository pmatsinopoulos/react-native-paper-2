/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  Appbar,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';

const App = () => {
  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content title="Vehicle Management" subtitle="Hi!" />
      </Appbar.Header>
      <Card>
        <Card.Title
          title="Card title"
          subtitle="Card subtitle"
          left={props => <Avatar.Icon {...props} icon="folder" />}
        />
        <Card.Content>
          <Title>Card Title</Title>
          <Paragraph>Card Content</Paragraph>
        </Card.Content>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </Fragment>
  );
};

export default App;
