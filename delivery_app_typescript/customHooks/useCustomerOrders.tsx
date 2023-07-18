import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../graphQL/Queries";

function useCustomerOrders(userId: string) {
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

    //This code shows the error; 'TypeError: Cannot read property 'customer_id' of undefined

    // This error is located at:
    // in CardContainer (created by CustomerScreen)'
    // const customerOrders = orders.filter(
    //   (order) => order.trackingItems.customer_id === userId
    // );

    const customerOrders = orders.filter(
      (order) => order.trackingItems === userId
    );

    setOrders(customerOrders);
  }, [data, userId]);

  return { loading, error, orders };
}

export default useCustomerOrders;
