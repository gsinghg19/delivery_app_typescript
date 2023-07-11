import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomerScreen from "../Screens/CustomerScreen";
import DeliveryMapScreen from "../Screens/DeliveryMapScreen";
import LoginScreen from "../Screens/LoginScreen";
import { useNavigation } from "@react-navigation/native";

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
  Login: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Customers" component={CustomerScreen} />
      <Tab.Screen name="Orders" component={DeliveryMapScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
