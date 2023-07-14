import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
  query getCustomers {
    getCustomers {
      name
      value {
        email
        name
      }
    }
  }
`;

export const GET_ORDERS = gql`
  query getOrders {
    name
    value {
      Address
      City
      Lat
      Lng
      carrier
      createAt
      shippingCost
      trackingId
      trackingItems {
        items {
          item_id
          name
          price
          quantity
        }
        customer {
          email
          name
        }
      }
    }
  }
`;
