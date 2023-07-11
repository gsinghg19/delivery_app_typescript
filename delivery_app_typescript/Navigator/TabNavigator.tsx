import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomerScreen from "../Screens/CustomerScreen";
import DeliveryMapScreen from "../Screens/DeliveryMapScreen";
import LoginScreen from "../Screens/LoginScreen";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";

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
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#59C1CC",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Customers") {
            return (
              <Icon
                name="users"
                type="entypo"
                color={focused ? "##855ee6" : "#e6855e"}
              />
            );
          } else if (route.name === "Orders") {
            return (
              <Icon
                name="box"
                type="entypo"
                color={focused ? "##855ee6" : "#e6855e"}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Customers" component={CustomerScreen} />
      <Tab.Screen name="Orders" component={DeliveryMapScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
