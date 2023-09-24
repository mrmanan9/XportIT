import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const YourPhoto = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.yourPhoto}
      onPress={() => navigation.navigate("GSTRegistrationCheck")}
    >
      <View style={[styles.selfiePhoto, styles.selfieLayout]}>
        <View style={styles.selfiePhotoChild} />
        <Text style={[styles.verify, styles.verifyTypo]}>Verify</Text>
        <View style={[styles.selfiePhotoItem, styles.selfieLayout]} />
        <Image
          style={styles.selfiePhotoInner}
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
        <Text style={[styles.takeYourPhoto, styles.verifyTypo]}>
          Take your photo
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  selfieLayout: {
    width: 417,
    position: "absolute",
  },
  verifyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    left: "50%",
    position: "absolute",
  },
  selfiePhotoChild: {
    marginLeft: -76.5,
    top: 740,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorCornflowerblue,
    width: 153,
    height: 38,
    left: "50%",
    position: "absolute",
  },
  verify: {
    marginLeft: -17.5,
    top: 751,
    color: Color.colorWhitesmoke,
  },
  selfiePhotoItem: {
    top: 35,
    left: 0,
    backgroundColor: Color.colorGainsboro,
    height: 672,
  },
  selfiePhotoInner: {
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
  takeYourPhoto: {
    marginLeft: -50.5,
    top: 0,
    color: Color.colorDarkslategray,
  },
  selfiePhoto: {
    marginLeft: -208,
    top: 97,
    height: 778,
    left: "50%",
  },
  yourPhoto: {
    borderRadius: Border.br_29xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default YourPhoto;
