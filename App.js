import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/LoginScreen";
import SignUp from "./src/SignUp";
import AddPicture from "./src/AddPicture";
import Car from "./src/Car";
import Map from "./src/Map";
import YourJourney from "./src/YourJourney";
import StopPoints from "./src/StopPoints";
import AddPayments from "./src/AddPayments";
import AddCard from './src/AddCard';
import ImportCard from "./src/ImportCard";
import Location from "./src/Location";
import Startmap from "./src/Startmap";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="AddPicture"
          component={AddPicture}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Car"
          component={Car}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="YourJourney"
          component={YourJourney}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="StopPoints"
          component={StopPoints}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="AddPayments"
          component={AddPayments}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddCard"
          component={AddCard}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="ImportCard"
          component={ImportCard}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Location"
          component={Location}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Startmap"
          component={Startmap}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
