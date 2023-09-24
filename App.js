const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import VerifyNotification from "./screens/VerifyNotification";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import FircNumber from "./screens/FircNumber";
import FrontOfBillOfExport from "./screens/FrontOfBillOfExport";
import ShippingBill from "./screens/ShippingBill";
import FrontOfPancard from "./screens/FrontOfPancard";
import IECVerify from "./screens/IECVerify";
import Rectangle from "./components/Rectangle";
import Color from "./components/Color";
import Start from "./screens/Start";
import HomePage from "./screens/HomePage";
import NIDVerifying from "./screens/NIDVerifying";
import NIDVerifying1 from "./screens/NIDVerifying1";
import OTPForSignup from "./screens/OTPForSignup";
import OTPForLogin from "./screens/OTPForLogin";
import YourPhoto from "./screens/YourPhoto";
import BackOfNID from "./screens/BackOfNID";
import AdCodeVerify from "./screens/AdCodeVerify";
import GSTRegistrationCheck from "./screens/GSTRegistrationCheck";
import FrontOfNID from "./screens/FrontOfNID";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="VerifyNotification"
              component={VerifyNotification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FircNumber"
              component={FircNumber}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrontOfBillOfExport"
              component={FrontOfBillOfExport}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShippingBill"
              component={ShippingBill}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrontOfPancard"
              component={FrontOfPancard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IECVerify"
              component={IECVerify}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Start"
              component={Start}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NIDVerifying"
              component={NIDVerifying}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NIDVerifying1"
              component={NIDVerifying1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPForSignup"
              component={OTPForSignup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPForLogin"
              component={OTPForLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="YourPhoto"
              component={YourPhoto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BackOfNID"
              component={BackOfNID}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdCodeVerify"
              component={AdCodeVerify}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GSTRegistrationCheck"
              component={GSTRegistrationCheck}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrontOfNID"
              component={FrontOfNID}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
