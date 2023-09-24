import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const FrontOfNID = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.frontOfNid}
      onPress={() => navigation.navigate("BackOfNID")}
    >
      <View style={styles.frontNid}>
        <View style={[styles.frame, styles.frameLayout]}>
          <Image
            style={[styles.frameChild, styles.framePosition]}
            contentFit="cover"
            source={require("../assets/arrow-3.png")}
          />
          <Text style={[styles.takeAFront, styles.continueTypo]}>
            Take a front photo of your Aadhar card
          </Text>
        </View>
        <Image
          style={[styles.frameIcon, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
        <View style={styles.frame1}>
          <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 16,
    top: 0,
  },
  framePosition: {
    left: 0,
    position: "absolute",
  },
  continueTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    width: 29,
    height: 16,
    top: 0,
  },
  takeAFront: {
    marginLeft: -87.46,
    color: Color.colorDarkslategray,
    top: 0,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
  },
  frame: {
    left: 33,
    width: 305,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon: {
    top: 35,
    height: 672,
    width: 417,
    overflow: "hidden",
  },
  continue: {
    marginLeft: -27.5,
    top: 11,
    color: Color.colorWhitesmoke,
  },
  frame1: {
    marginLeft: -76.5,
    top: 740,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorCornflowerblue,
    width: 153,
    height: 38,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  frontNid: {
    top: 97,
    left: 6,
    height: 778,
    width: 417,
    position: "absolute",
  },
  frontOfNid: {
    borderRadius: Border.br_29xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default FrontOfNID;
