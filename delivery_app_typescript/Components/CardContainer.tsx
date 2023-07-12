import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Card } from "@rneui/themed";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AccountSettings from "../Screens/AccountSettings";

export type cardData = {
  id: string;
  title: string;
  screen: string;
};

const CardData = [
  {
    id: "1",
    title: "Account Settings",
    screen: "Settings",
  },
  {
    id: "2",
    title: "App settings",
    screen: "settings",
  },
  {
    id: "3",
    title: "payment settings",
    screen: "settings",
  },
];

const CardContainer = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Card>
        <TouchableOpacity>
          <Text>Cards will go here for settings options</Text>
        </TouchableOpacity>
      </Card>
    </SafeAreaView>
  );
};

export default CardContainer;
