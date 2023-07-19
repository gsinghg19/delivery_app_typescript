import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import useCustomerOrders from "../customHooks/useCustomerOrders";
import { useTailwind } from "tailwind-rn/dist";
import { useNavigation } from "@react-navigation/native";
import { CustomerScrnCompositeNavProp } from "../Screens/CustomerScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "@rneui/themed";
import ModalContainer from "./ModalContainer";

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
    <TouchableOpacity>
      <Card containerStyle={tw("rounded-lg p-5")}>
        <Text style={tw("text-2xl font-bold")}>
          {loading ? <ActivityIndicator size="small" color="#0000ff" /> : name}
        </Text>
        <Text style={tw("text-sm")}>
          ID:{" "}
          {loading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            userId
          )}
        </Text>
        <View>
          <Text>
            {loading ? (
              <ActivityIndicator size="small" color="#0000ff" />
            ) : (
              `${orders.length}x`
            )}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default CardContainer;
