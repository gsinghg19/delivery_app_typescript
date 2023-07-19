import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import useCustomerOrders from "../customHooks/useCustomerOrders";
import { useTailwind } from "tailwind-rn/dist";
import { useNavigation } from "@react-navigation/native";
import { CustomerScrnCompositeNavProp } from "../Screens/CustomerScreen";
import { Card, Icon } from "@rneui/themed";
import ModalContainer from "./ModalContainer";
import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";

type Props = {
  name: string;
  userId: string;
  email: string;
};

const CardContainer = ({ email, userId, name }: Props) => {
  const { loading, error, orders } = useCustomerOrders(userId);
  const navigation = useNavigation<CustomerScrnCompositeNavProp>();
  const tw = useTailwind();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("MyModal", { name: name, userId: userId })
      }
    >
      <Card containerStyle={tw("rounded-lg p-5")}>
        <View>
          <View style={tw("flex-row justify-between")}>
            <View>
              <Text style={tw("text-2xl font-bold")}>
                {loading ? (
                  <ActivityIndicator size="small" color="#0000ff" />
                ) : (
                  name
                )}
              </Text>
              <Text style={[tw("text-sm"), { color: "#855ee6" }]}>
                ID:{" "}
                {loading ? (
                  <ActivityIndicator size="small" color="#0000ff" />
                ) : (
                  userId
                )}
              </Text>
            </View>

            <View style={tw("flex-row justify-end items-center")}>
              <Text>
                {loading ? (
                  <ActivityIndicator size="small" color="#0000ff" />
                ) : (
                  `${orders.length}x`
                )}
              </Text>
              <Icon
                name="box"
                type="entypo"
                style={tw("mb-5 ml-auto")}
                color="#855ee6"
                size={40}
              />
            </View>
          </View>
        </View>

        <CardDivider />
        <Text>
          {loading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            `${email}`
          )}
        </Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CardContainer;
