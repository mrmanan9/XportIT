import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const GSTRegistrationCheck = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.gstRegistrationCheck}
      onPress={() => navigation.navigate("AdCodeVerify")}
    >
      <View style={styles.frontNid}>
        <View style={[styles.frame, styles.frameFlexBox]}>
          <View style={[styles.frame1, styles.frameSpaceBlock]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/arrow-32.png")}
            />
            <Text style={[styles.takeAPhoto, styles.continueTypo]}>
              Take a Photo of your GST registarton
            </Text>
          </View>
        </View>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
        <View style={[styles.frame2, styles.frameSpaceBlock]}>
          <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    position: "absolute",
  },
  frameSpaceBlock: {
    paddingVertical: Padding.p_0,
    overflow: "hidden",
  },
  continueTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
  },
  frameChild: {
    maxWidth: "100%",
    height: 22,
    overflow: "hidden",
    flex: 1,
  },
  takeAPhoto: {
    color: Color.colorDarkslategray,
    marginLeft: 36,
    flex: 1,
  },
  frame1: {
    flexDirection: "row",
    paddingHorizontal: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frame: {
    top: 0,
    left: 33,
    width: 351,
    overflow: "hidden",
  },
  frameIcon: {
    top: 35,
    left: 0,
    width: 417,
    height: 672,
    position: "absolute",
    overflow: "hidden",
  },
  continue: {
    color: Color.colorWhitesmoke,
    alignSelf: "stretch",
  },
  frame2: {
    marginLeft: -77,
    top: 740,
    left: "50%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorCornflowerblue,
    width: 153,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_29xl,
    justifyContent: "center",
    position: "absolute",
  },
  frontNid: {
    height: 778,
    alignSelf: "stretch",
  },
  gstRegistrationCheck: {
    borderRadius: Border.br_29xl,
    backgroundColor: Color.colorWhitesmoke,
    width: "100%",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_32xl,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default GSTRegistrationCheck;
