import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Discord-down-1329212.jpg?r=1598786313995';

  return (
    <Image
      source={{ uri }}
      style={styles.image} 
      resizeMode="cover"
    />
  );
}