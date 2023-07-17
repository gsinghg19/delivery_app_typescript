import { TailwindProvider, create } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import utilities from "./tailwind.json";
import CustomerScreen from "./Screens/CustomerScreen";
import RootNavigator from "./Navigator/RootNavigator";
import NetInfo from "@react-native-community/netinfo";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { useEffect, useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const client = new ApolloClient({
  uri: "https://dashboard.stepzen.com/explorer?endpoint=api%2Fhopping-dragonfly",
  cache: new InMemoryCache(),
});

export default function App() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
      if (!state.isConnected) {
        Toast.show({
          type: "error",
          text1: "No Internet Connection",
          visibilityTime: 3000,
          autoHide: false,
        });
      } else if (state.isConnected) {
        Toast.show({
          type: "success",
          text1: "Connected",
          visibilityTime: 3000,
          autoHide: true,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    // @ts-ignore - TailwindProvider is missing a type defintion
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
          <Toast position="top" topOffset={50} />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
