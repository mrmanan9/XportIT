import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Signup = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.signup}
      onPress={() => navigation.navigate("OTPForSignup")}
    >
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.enterMobileDetails, styles.welcomeToExortTypo]}>
          Enter mobile details
        </Text>
      </View>
      <View style={styles.mobileDetailForm}>
        <View style={[styles.mobileDetailFormChild, styles.mobileLayout]} />
        <View style={[styles.mobileDetailFormItem, styles.mobileLayout]} />
        <View style={[styles.mobileDetailFormInner, styles.mobileLayout]} />
        <Text style={[styles.xxxxxxxxx, styles.textTypo]}>01XXXXXXXXX</Text>
        <Text style={[styles.text, styles.textTypo]}>********</Text>
        <Text style={[styles.selectYourMobile, styles.textTypo]}>
          Select your mobile operator
        </Text>
        <Text style={[styles.phone, styles.phoneTypo]}>Phone</Text>
        <Text style={[styles.digit, styles.phoneTypo]}>6 digit</Text>
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow-2.png")}
        />
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Text style={[styles.welcomeToExort, styles.welcomeToExortTypo]}>
          Welcome To Exort IT
        </Text>
      </View>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    width: 257,
    left: 65,
    position: "absolute",
    overflow: "hidden",
  },
  welcomeToExortTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_6xl,
  },
  mobileLayout: {
    height: 42,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
    left: 0,
    width: 297,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  phoneTypo: {
    left: 1,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorDarkslategray,
    position: "absolute",
  },
  enterMobileDetails: {
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_6xl,
  },
  frame: {
    top: 327,
  },
  mobileDetailFormChild: {
    top: 96,
  },
  mobileDetailFormItem: {
    top: 21,
  },
  mobileDetailFormInner: {
    top: 169,
  },
  xxxxxxxxx: {
    top: 35,
    color: Color.colorSilver,
    left: 15,
    fontSize: FontSize.size_xs,
  },
  text: {
    top: 183,
    color: Color.colorLightgray,
    left: 15,
    fontSize: FontSize.size_xs,
  },
  selectYourMobile: {
    top: 75,
    fontSize: FontSize.size_xs,
    left: 0,
    color: Color.colorDarkslategray,
  },
  phone: {
    top: 0,
  },
  digit: {
    top: 148,
  },
  arrowIcon: {
    top: 102,
    left: 279,
    width: 7,
    height: 4,
    position: "absolute",
  },
  mobileDetailForm: {
    top: 398,
    height: 211,
    width: 297,
    left: 65,
    position: "absolute",
  },
  welcomeToExort: {
    color: Color.colorCornflowerblue,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_6xl,
  },
  frame1: {
    top: 243,
  },
  frameIcon: {
    top: 634,
    width: 306,
    height: 72,
    left: 65,
    position: "absolute",
    overflow: "hidden",
  },
  signup: {
    borderRadius: Border.br_29xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Signup;
