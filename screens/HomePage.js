import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePage}>
      <View style={[styles.homePageChild, styles.frameViewLayout]} />
      <Image
        style={[styles.homePageItem, styles.homeLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-727.png")}
      />
      <Image
        style={[styles.homePageInner, styles.homeLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-727.png")}
      />
      <Text style={[styles.brcProcessingAutomatic, styles.brcTypo]}>
        BRC Processing Automatic
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.homeLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-727.png")}
      />
      <Image
        style={[styles.homePageChild1, styles.homeLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-727.png")}
      />
      <Text style={[styles.editData, styles.editDataTypo]}>Edit Data</Text>
      <Text style={[styles.helpAndSupport, styles.brcTypo]}>
        Help and support
      </Text>
      <Text style={[styles.welcomeSih, styles.editDataTypo]}>Welcome SIH</Text>
      <Pressable
        style={[styles.brcProcessingManualContainer, styles.brcPosition]}
        onPress={() => navigation.navigate("ShippingBill")}
      >
        <Text style={styles.brcTypo}>BRC Processing manual</Text>
      </Pressable>
      <View style={[styles.frameView, styles.frameViewLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameViewLayout: {
    height: 100,
    width: 100,
    position: "absolute",
    overflow: "hidden",
  },
  homeLayout: {
    height: 93,
    width: 428,
    left: 0,
    position: "absolute",
  },
  brcTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_6xl,
  },
  editDataTypo: {
    left: 28,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  brcPosition: {
    left: 23,
    position: "absolute",
  },
  homePageChild: {
    top: 1,
    left: 129,
  },
  homePageItem: {
    top: 235,
  },
  homePageInner: {
    top: 347,
  },
  brcProcessingAutomatic: {
    top: 365,
    left: 23,
    position: "absolute",
  },
  rectangleIcon: {
    top: 574,
  },
  homePageChild1: {
    top: 459,
  },
  editData: {
    top: 491,
  },
  helpAndSupport: {
    top: 607,
    left: 21,
    transform: [
      {
        rotate: "-0.29deg",
      },
    ],
    position: "absolute",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_6xl,
  },
  welcomeSih: {
    top: 46,
    width: 151,
    height: 32,
  },
  brcProcessingManualContainer: {
    top: 265,
  },
  frameView: {
    top: 212,
    left: 178,
  },
  homePage: {
    borderRadius: Border.br_29xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default HomePage;
