import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from './src/screens/IndexScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen
  },

  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'COLUMN KING'
    }
  }
);

export default createAppContainer(navigator);