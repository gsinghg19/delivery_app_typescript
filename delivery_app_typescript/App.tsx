import { TailwindProvider, create } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import utilities from "./tailwind.json";
import CustomerScreen from "./Screens/CustomerScreen";
import RootNavigator from "./Navigator/RootNavigator";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://dashboard.stepzen.com/explorer?endpoint=api%2Fhopping-dragonfly",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type defintion
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
