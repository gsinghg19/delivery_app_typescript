import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import useCustomerOrders from "../customHooks/useCustomerOrders";
import { useTailwind } from "tailwind-rn/dist";
import { useNavigation } from "@react-navigation/native";
import { CustomerScrnCompositeNavProp } from "../Screens/CustomerScreen";
import { SafeAreaView } from "react-native-safe-area-context";

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
      <Text>card goes here</Text>
    </TouchableOpacity>
  );
};

export default CardContainer;
