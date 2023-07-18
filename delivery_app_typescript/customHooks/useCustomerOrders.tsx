import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../graphQL/Queries";

function useCustomerOrders(userId: any) {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!data) return;

    const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
      carrier: value.carrier,
      createAt: value.createAt,
      shippingCost: value.shippingCost,
      trackingId: value.trackingId,
      trackingitems: value.trackingItems,
      Address: value.Address,
      City: value.City,
      Lat: value.Lat,
      Lng: value.Lng,
    }));

    const customerOrders = orders.filter(
      (order) => order.trackingItems.customer_id === userId
    );

    setOrders(customerOrders);
  }, [data, userId]);

  return { loading, error, orders };
}

export default useCustomerOrders;
