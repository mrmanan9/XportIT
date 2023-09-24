import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Start = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.start}
      onPress={() => navigation.navigate("Login")}
    >
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.sifnup}>Get Started!</Text>
      </View>
      <Image
        style={styles.whatsappImage20230921At1Icon}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20230921-at-1146-1.png")}
      />
      <Image
        style={styles.whatsappImage20230921At1Icon}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20230921-at-1146-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 55,
    width: 297,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorCornflowerblue,
  },
  sifnup: {
    top: 20,
    left: 107,
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 569,
    left: 65,
  },
  whatsappImage20230921At1Icon: {
    top: 276,
    left: 59,
    width: 303,
    height: 187,
    position: "absolute",
  },
  start: {
    borderRadius: Border.br_29xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Start;
