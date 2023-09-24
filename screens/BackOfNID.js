import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const BackOfNID = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.backOfNid}
      onPress={() => navigation.navigate("YourPhoto")}
    >
      <View style={[styles.backNid, styles.backLayout]}>
        <View style={styles.backNidChild} />
        <Text style={[styles.continueToSelfie, styles.takeABackTypo]}>
          Continue to selfie
        </Text>
        <View style={[styles.backNidItem, styles.backLayout]} />
        <Image
          style={styles.backNidInner}
          contentFit="cover"
          source={require("../assets/ellipse-751.png")}
        />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow-31.png")}
        />
        <Text style={[styles.takeABack, styles.takeABackTypo]}>
          Take a back photo of your Aadhar card
        </Text>
      </View>
      <Image
        style={[styles.backOfNidChild, styles.backPosition]}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.backOfNidItem, styles.backPosition]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backLayout: {
    width: 413,
    position: "absolute",
  },
  takeABackTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    left: "50%",
    position: "absolute",
  },
  backPosition: {
    height: 1,
    left: 425,
    position: "absolute",
  },
  backNidChild: {
    marginLeft: -75.77,
    top: 740,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorCornflowerblue,
    width: 152,
    height: 38,
    left: "50%",
    position: "absolute",
  },
  continueToSelfie: {
    marginLeft: -53.98,
    top: 751,
    color: Color.colorWhitesmoke,
    width: 108,
  },
  backNidItem: {
    top: 35,
    left: 0,
    backgroundColor: Color.colorGainsboro,
    height: 672,
  },
  backNidInner: {
    top: 640,
    left: 177,
    width: 57,
    height: 58,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.58%",
    width: "7.67%",
    top: "83.65%",
    right: "46.28%",
    bottom: "12.77%",
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
  takeABack: {
    marginLeft: -109.44,
    top: 0,
    color: Color.colorDarkslategray,
    width: 238,
  },
  backNid: {
    marginLeft: -208,
    top: 97,
    height: 783,
    left: "50%",
  },
  backOfNidChild: {
    top: 248,
    width: 42,
  },
  backOfNidItem: {
    top: 492,
    width: 44,
  },
  backOfNid: {
    borderRadius: Border.br_29xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default BackOfNID;
