import { TailwindProvider, create } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import utilities from "./tailwind.json";
import CustomerScreen from "./Screens/CustomerScreen";
import RootNavigator from "./Navigator/RootNavigator";

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type defintion
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </TailwindProvider>
  );
}
