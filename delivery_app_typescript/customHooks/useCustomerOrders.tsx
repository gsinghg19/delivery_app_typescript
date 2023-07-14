import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CUSTOMERS } from "../graphQL/Queries";

function useCustomerOrders(userId: any) {
  const { loading, error, data } = useQuery(GET_CUSTOMERS);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!data) return;
    const orders: Order[] = [...data.getOrders];

    const customerOrders = orders.filter((order) => {
      order.trackingItems.customer_id === userId;
    });
    setOrders(customerOrders);
  }, [data, userId]);

  return { loading, data, error };
}

export default useCustomerOrders;
