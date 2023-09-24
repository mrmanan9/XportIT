import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const FircNumber = () => {
  return (
    <View style={styles.fircNumber}>
      <View style={[styles.frontNid, styles.frontLayout]}>
        <Text style={[styles.subm, styles.enterTypo]}>{`subm
`}</Text>
        <View style={[styles.frontNidChild, styles.frontLayout]} />
        <Image
          style={styles.frontNidItem}
          contentFit="cover"
          source={require("../assets/arrow-3.png")}
        />
        <Text style={[styles.enterTheFirc, styles.fircPosition]}>
          Enter the Firc number
        </Text>
        <View style={styles.frontNidInner} />
        <Text style={[styles.enterFircNo, styles.enterTypo]}>
          Enter Firc no
        </Text>
      </View>
      <View style={[styles.fircNumberChild, styles.fircPosition]} />
      <Text style={[styles.submit, styles.enterTypo]}>Submit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frontLayout: {
    width: 417,
    position: "absolute",
  },
  enterTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
  },
  fircPosition: {
    left: "50%",
    position: "absolute",
  },
  subm: {
    top: 767,
    left: 146,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  frontNidChild: {
    top: 35,
    left: 0,
    backgroundColor: Color.colorGainsboro,
    height: 672,
  },
  frontNidItem: {
    top: -3,
    left: 31,
    width: 30,
    height: 22,
    position: "absolute",
  },
  enterTheFirc: {
    marginLeft: -110.5,
    top: 0,
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
  },
  frontNidInner: {
    top: 309,
    left: 47,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    width: 297,
    height: 42,
    position: "absolute",
  },
  enterFircNo: {
    top: 285,
    left: 63,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  frontNid: {
    top: 97,
    left: 6,
    height: 799,
  },
  fircNumberChild: {
    marginLeft: -77,
    top: 826,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorCornflowerblue,
    width: 153,
    height: 38,
  },
  submit: {
    top: 837,
    left: 191,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  fircNumber: {
    borderRadius: Border.br_29xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default FircNumber;
