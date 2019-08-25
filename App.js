/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {Appbar, List} from 'react-native-paper';

const App = () => {
  const [accordionExpanded, setAccordionExpanded] = useState(false);
  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content title="Vehicle Management" subtitle="Hi!" />
      </Appbar.Header>
      <List.Section title="List Section Title">
        <List.Accordion
          title="Uncontrolled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="First Item" />
          <List.Item title="Second Item" />
        </List.Accordion>

        <List.Accordion
          title="Controlled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}
          onPress={() => setAccordionExpanded(prev => !prev)}
          expanded={accordionExpanded}>
          <List.Item title="First Item" />
          <List.Item title="Second Item" />
        </List.Accordion>
      </List.Section>
    </Fragment>
  );
};

export default App;
