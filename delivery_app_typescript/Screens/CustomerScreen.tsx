import React, { useLayoutEffect } from "react";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { ActivityIndicator, ScrollView } from "react-native";
import { TabStackParamList } from "../Navigator/TabNavigator";
import { RootStackParamList } from "../Navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Image } from "@rneui/themed";
import { useTailwind } from "tailwind-rn/dist";

// create a composite navigation prop here.
export type CustomerScrnCompositeNavProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomerScreen = () => {
  const navigation = useNavigation<CustomerScrnCompositeNavProp>();
  const tw = useTailwind();

  // useEffect which works when the ui and other dependencies mounts.
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#e6855e" }}>
      <Image
        source={{ uri: "https://i.imgur.com/uU8GTZM.jpeg" }}
        containerStyle={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />
    </ScrollView>
  );
};

export default CustomerScreen;
