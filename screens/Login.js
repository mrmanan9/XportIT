import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={styles.frame}>
        <Image
          style={styles.whatsappImage20230921At1Icon}
          contentFit="cover"
          source={require("../assets/whatsapp-image-20230921-at-1146-3.png")}
        />
        <Text style={styles.xportIt}>Xport IT</Text>
      </View>
      <View style={styles.loginForm}>
        <Text style={styles.phone}>Phone</Text>
        <Text style={styles.digit}>6 digit</Text>
        <Text style={styles.doYouHave}>Do you have account?</Text>
        <Pressable
          style={styles.signUp}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.signUp1}>Sign up</Text>
        </Pressable>
        <View style={styles.frame1}>
          <Text style={styles.xxxxxxxx}>01XXXXXXXX</Text>
        </View>
        <View style={styles.frame2}>
          <Text style={styles.text}>******</Text>
        </View>
        <View style={styles.frame3}>
          <Pressable
            style={styles.frameChild}
            onPress={() => navigation.navigate("OTPForLogin")}
          />
          <Text style={styles.login1}>Login</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  whatsappImage20230921At1Icon: {
    position: "relative",
    width: 199,
    height: 149,
  },
  xportIt: {
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    height: 29,
    marginRight: 22,
  },
  frame: {
    width: 199,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 178,
    marginRight: 17,
  },
  phone: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  digit: {
    position: "absolute",
    top: 74,
    left: 0,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  doYouHave: {
    position: "absolute",
    top: 226,
    left: 0,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  signUp1: {
    fontSize: FontSize.size_xl,
    textDecoration: "underline",
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorCornflowerblue,
    textAlign: "left",
  },
  signUp: {
    position: "absolute",
    left: 0,
    top: 248,
  },
  xxxxxxxx: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorSilver,
    textAlign: "left",
  },
  frame1: {
    position: "absolute",
    top: 19,
    left: 0,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    width: 297,
    height: 42,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: Padding.p_0,
  },
  text: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorLightgray,
    textAlign: "left",
  },
  frame2: {
    position: "absolute",
    top: 94,
    left: 0,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    width: 297,
    height: 42,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 9,
    paddingVertical: Padding.p_0,
  },
  frameChild: {
    position: "relative",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorCornflowerblue,
    width: 297,
    height: 42,
  },
  login1: {
    position: "relative",
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorWhite,
    textAlign: "left",
    marginTop: -30,
  },
  frame3: {
    position: "absolute",
    top: 153,
    left: 0,
    width: 297,
    height: 42,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  loginForm: {
    width: 297,
    height: 271,
    marginRight: 1,
    marginTop: 23,
  },
  login: {
    position: "relative",
    borderRadius: Border.br_29xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 65,
    paddingVertical: 175,
  },
});

export default Login;
