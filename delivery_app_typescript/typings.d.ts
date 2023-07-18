// type Customer = {
//   email: string;
//   name: string;
// };

// type CustomerList = {
//   name: ID;
//   value: Customer;
// };

// type CustomerResponse = {
//   name: ID;
//   value: Customer;
// };

// type Order = {
//   carrier: string;
//   createAt: Date;
//   shippingCost: Int;
//   trackingId: string;
//   Address: string;
//   City: string;
//   Lat: Float;
//   Lng: Float;
//   trackingItems: TrackingItems;
// };

// type OrderResponse = {
//   value: Order;
// };

// type OrderList = {
//   name: ID;
//   value: Order;
// };

// type Items = {
//   item_id: ID;
//   name: string;
//   price: number;
//   quantity: number;
// };

// type TrackingItems = {
//   customer_id: ID;
//   items: [Items];
//   customer: Customer;
// };

// type TrackingItemsList = {
//   name: ID;
//   value: TrackingItems;
// };

type Customer = {
  email: string;
  name: string;
};

type CustomerList = {
  name: ID;
  value: Customer;
};

type TrackingItems = {
  customer_id: ID;
  customer: Customer;
  items: [Item];
};

type Item = {
  item_id: ID;
  name: string;
  price: number;
  quantity: number;
};

type OrderResponse = {
  value: Order;
};

type CustomerResponse = {
  name: ID;
  value: Customer;
};

type Order = {
  Address: string;
  City: string;
  Lat: number;
  Lng: number;
  carrier: string;
  createAt: string;
  shippingCost: number;
  trackingId: string;
  trackingItems: Trackingitem;
};
