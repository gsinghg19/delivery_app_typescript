import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { Icon } from "@rneui/themed";
import { TabStackParamList } from "../Navigator/TabNavigator";
import { RootStackParamList } from "../Navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";

type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "MyModal">
>;

const ModalScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw("absolute top-0 right-0 pt-4 pr-4")}
      onPress={navigation.goBack}
    >
      <Icon type="antdesign" name="closecircle" />
    </TouchableOpacity>
  );
};

export default ModalScreen;
