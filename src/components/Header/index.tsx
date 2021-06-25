import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';

interface Props {
  title: string;
  action?: React.ReactNode;
}

export function Header({ title, action }: Props) {
  const { goBack } = useNavigation();
  const { secondary100, secondary40, heading } = theme.colors;

  function handleGoBack() {
    goBack();
  }
  
  return (
    <LinearGradient
      colors={[secondary100, secondary40]}
      style={styles.container}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" color={heading} size={24} />
      </BorderlessButton>

      <Text style={styles.title}>
        {title}
      </Text>

      {action ? (
        <View>
          {action}
        </View>
      ) : (
        <View style={{ width: 24 }} />
      )}
    </LinearGradient>
  );
}