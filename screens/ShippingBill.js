import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const ShippingBill = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.shippingBill}>
      <View style={[styles.frontNid, styles.frontLayout]}>
        <Pressable
          style={styles.frontNidChild}
          onPress={() => navigation.navigate("FrontOfBillOfExport")}
        />
        <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
        <View style={[styles.frontNidItem, styles.frontLayout]} />
        <Image
          style={styles.frontNidInner}
          contentFit="cover"
          source={require("../assets/ellipse-75.png")}
        />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow-3.png")}
        />
        <Text style={[styles.takeAFront, styles.continueTypo]}>
          Take a front photo of your Shipping Bill
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frontLayout: {
    width: 417,
    position: "absolute",
  },
  continueTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    left: "50%",
    position: "absolute",
  },
  frontNidChild: {
    marginLeft: -76.5,
    top: 740,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorCornflowerblue,
    width: 153,
    height: 38,
    left: "50%",
    position: "absolute",
  },
  continue: {
    marginLeft: -27.5,
    top: 751,
    color: Color.colorWhitesmoke,
  },
  frontNidItem: {
    top: 35,
    left: 0,
    backgroundColor: Color.colorGainsboro,
    height: 672,
  },
  frontNidInner: {
    top: 640,
    left: 179,
    width: 58,
    height: 58,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.6%",
    width: "7.67%",
    top: "84.19%",
    right: "46.28%",
    bottom: "12.21%",
    left: "46.04%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  arrowIcon: {
    top: -3,
    left: 31,
    width: 30,
    height: 22,
    position: "absolute",
  },
  takeAFront: {
    marginLeft: -110.5,
    top: 0,
    color: Color.colorDarkslategray,
  },
  frontNid: {
    marginLeft: -208,
    top: 97,
    height: 778,
    left: "50%",
  },
  shippingBill: {
    borderRadius: Border.br_29xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default ShippingBill;
