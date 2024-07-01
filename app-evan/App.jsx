import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./components/TabBar";

export default function App() {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
}
