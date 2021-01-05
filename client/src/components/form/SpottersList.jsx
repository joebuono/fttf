import React from 'react';
import { List, ListItem } from 'material-ui/List'

const SpottersList = ({spotters}) => {
  return (
      <List>
        {spotters.map((spotter, index) => <ListItem key={index} primaryText={spotter.spotterName} secondaryText={spotter.spotterEmail} />)}
      </List>
  );
};

export default SpottersList;