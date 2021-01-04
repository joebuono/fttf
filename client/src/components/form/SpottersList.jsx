import React from 'react';
import { List, ListItem } from 'material-ui/List'

const SpottersList = ({spotters}) => {
  console.log('inside spotters list component');
  return (
      <List>
        {spotters.map(spotter => <ListItem primaryText={spotter.spotterName} secondaryText={spotter.spotterEmail} />)}
      </List>
  );
};

export default SpottersList;