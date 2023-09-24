import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const OTPForLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.otpForLogin}>
      <Pressable
        style={styles.optLoginVerify}
        onPress={() => navigation.navigate("VerifyNotification")}
      >
        <View style={styles.optLoginVerifyChild} />
        <Text style={[styles.text, styles.textFlexBox]}>******</Text>
        <Text style={[styles.enterOtp, styles.enterOtpTypo]}>Enter OTP</Text>
        <Text style={[styles.resendCode28s, styles.resendCode28sClr]}>
          Resend code? 28s
        </Text>
        <Text style={[styles.verifyYourNumber, styles.resendCode28sClr]}>
          Verify your number
        </Text>
        <Image
          style={styles.optLoginVerifyItem}
          contentFit="cover"
          source={require("../assets/ellipse-71.png")}
        />
        <Image
          style={styles.optLoginVerifyInner}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  enterOtpTypo: {
    left: 1,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
  },
  resendCode28sClr: {
    color: Color.colorCornflowerblue,
    textAlign: "left",
    position: "absolute",
  },
  optLoginVerifyChild: {
    top: 153,
    left: 0,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    width: 297,
    height: 42,
    position: "absolute",
  },
  text: {
    top: 168,
    left: 15,
    color: Color.colorLightgray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  enterOtp: {
    top: 132,
    color: Color.colorDarkslategray,
    textAlign: "left",
    position: "absolute",
  },
  resendCode28s: {
    top: 205,
    left: 1,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
  },
  verifyYourNumber: {
    marginLeft: -112,
    top: 0,
    left: "50%",
    fontSize: FontSize.size_6xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
  },
  optLoginVerifyItem: {
    top: 363,
    left: 234,
    width: 72,
    height: 72,
    position: "absolute",
  },
  optLoginVerifyInner: {
    top: 388,
    left: 257,
    width: 24,
    height: 22,
    position: "absolute",
  },
  optLoginVerify: {
    top: 269,
    left: 65,
    width: 306,
    height: 435,
    position: "absolute",
  },
  otpForLogin: {
    borderRadius: Border.br_29xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default OTPForLogin;
