import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const NIDVerifying = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nidVerifying}>
      <View style={styles.nidVerifyingChild} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-71.png")}
        />
      </Pressable>
      <View style={[styles.verify, styles.verifyPosition]}>
        <Text style={[styles.verificationSuccessful, styles.verifyPosition]}>
          Verification successful
        </Text>
        <Image
          style={[styles.verifyChild, styles.verifyChildLayout]}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
      </View>
      <Image
        style={[styles.nidVerifyingItem, styles.verifyChildLayout]}
        contentFit="cover"
        source={require("../assets/arrow-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  verifyPosition: {
    width: 262,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  verifyChildLayout: {
    height: 22,
    position: "absolute",
  },
  nidVerifyingChild: {
    top: 1,
    left: 129,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 313,
    top: 621,
    width: 72,
    height: 72,
    position: "absolute",
  },
  verificationSuccessful: {
    marginTop: -60,
    marginLeft: -131,
    fontSize: FontSize.size_6xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorCornflowerblue,
    textAlign: "left",
    height: 25,
  },
  verifyChild: {
    top: 109,
    left: 158,
    width: 24,
  },
  verify: {
    marginTop: -70,
    marginLeft: -127,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 120,
  },
  nidVerifyingItem: {
    top: 647,
    left: 333,
    width: 36,
  },
  nidVerifying: {
    borderRadius: Border.br_29xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default NIDVerifying;
