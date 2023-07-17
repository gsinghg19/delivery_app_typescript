import React, { useLayoutEffect, useState } from "react";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { TabStackParamList } from "../Navigator/TabNavigator";
import { RootStackParamList } from "../Navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Button, Card, Image, Input } from "@rneui/themed";
import { useTailwind } from "tailwind-rn/dist";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// create a composite navigation prop here.
export type CustomerScrnCompositeNavProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomerScreen = () => {
  const [input, setInput] = useState<string>("");

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
        PlaceholderContent={<ActivityIndicator size="large" color="#0000ff" />}
      />
      <Input
        placeholder="Search by customer..."
        value={input}
        onChangeText={setInput}
        containerStyle={tw("bg-white pt-5 pb-0 px-10")}
        leftIcon={<Icon name="account-outline" size={20} />}
      />
      <View style={tw("relative h-10")}>
        <Button
          onPress={() => setInput("")}
          containerStyle={tw("w-1/2 absolute top-0 right-0 h-16 w-16")}
        >
          <Icon name="close" size={20} />
        </Button>
      </View>
      <View>
        {/* <Card containerStyle={{ backgroundColor: "#00cfff"}}> */}
        <Card containerStyle={tw("bg-purple-500")}>
          <ActivityIndicator size="large" color="#0000ff" />
        </Card>
      </View>
    </ScrollView>
  );
};

export default CustomerScreen;
