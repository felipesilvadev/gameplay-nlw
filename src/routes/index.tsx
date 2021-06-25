import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 

import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';

import { SignIn } from '../screens/SignIn';

export function Routes() {
  const { user: { token } } = useAuth();

  return (
    <NavigationContainer>
      { token ? <AuthRoutes /> : <SignIn /> }
    </NavigationContainer>
  ) 
}