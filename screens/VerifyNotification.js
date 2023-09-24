import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const VerifyNotification = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.verifyNotification}
      onPress={() => navigation.navigate("FrontOfNID")}
    >
      <Text
        style={[styles.toCompleteYour, styles.textFlexBox]}
      >{`To complete your registration process, you 
will need to threw verification process`}</Text>
      <Text style={[styles.greatYoureAlmost, styles.textFlexBox]}>
        Great, You’re Almost There
      </Text>
      <View style={styles.frameParent}>
        <View
          style={[
            styles.takePhotosOfRequiredDocumeParent,
            styles.takeParentPosition,
          ]}
        >
          <Text style={[styles.takePhotosOf, styles.takeTypo]}>
            Take photos of Required document
          </Text>
          <Text style={[styles.photographBothSides, styles.majorityOfTheTypo]}>
            Photograph both sides
          </Text>
          <Image
            style={[styles.frameChild, styles.takeParentPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-72.png")}
          />
          <Text style={[styles.text, styles.textFlexBox]}>1</Text>
        </View>
        <View
          style={[styles.confirmBasicInformationParent, styles.frameLayout]}
        >
          <Text style={[styles.takePhotosOf, styles.takeTypo]}>
            Confirm basic information
          </Text>
          <Text
            style={[styles.majorityOfThe, styles.majorityOfTheTypo]}
          >{`Majority of the information will be scanned in
from your NID card`}</Text>
          <Image
            style={[styles.frameChild, styles.takeParentPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-72.png")}
          />
          <Text style={[styles.text, styles.textFlexBox]}>2</Text>
        </View>
        <View
          style={[styles.takeAPhotoOfYourselfParent, styles.takeParentPosition]}
        >
          <Text style={[styles.takeAPhoto, styles.takeTypo]}>
            Take a photo of yourself
          </Text>
          <Image
            style={[styles.frameChild, styles.takeParentPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-72.png")}
          />
          <Text style={[styles.text, styles.textFlexBox]}>3</Text>
        </View>
      </View>
      <View style={[styles.frame, styles.frameLayout]}>
        <Text style={styles.takeTypo}>Let’s Continue</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  takeParentPosition: {
    height: 32,
    left: 0,
    position: "absolute",
  },
  takeTypo: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  majorityOfTheTypo: {
    fontSize: FontSize.size_6xs,
    left: 40,
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  frameLayout: {
    height: 38,
    position: "absolute",
  },
  toCompleteYour: {
    marginLeft: -147,
    top: 218,
    fontSize: FontSize.size_smi,
    color: Color.colorSilver,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    left: "50%",
  },
  greatYoureAlmost: {
    marginLeft: -150,
    top: 182,
    fontSize: FontSize.size_6xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorCornflowerblue,
    left: "50%",
  },
  takePhotosOf: {
    top: 4,
    left: 39,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  photographBothSides: {
    top: 23,
  },
  frameChild: {
    width: 32,
    top: 0,
    height: 32,
  },
  text: {
    top: 5,
    left: 10,
    fontSize: FontSize.size_xl,
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  takePhotosOfRequiredDocumeParent: {
    top: 0,
    height: 32,
    width: 257,
  },
  majorityOfThe: {
    top: 22,
  },
  confirmBasicInformationParent: {
    top: 63,
    width: 202,
    left: 0,
    height: 38,
  },
  takeAPhoto: {
    top: 8,
    left: 39,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  takeAPhotoOfYourselfParent: {
    top: 125,
    width: 189,
  },
  frameParent: {
    top: 383,
    left: 103,
    height: 157,
    width: 257,
    position: "absolute",
  },
  frame: {
    marginLeft: -76,
    top: 706,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorCornflowerblue,
    width: 153,
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
    overflow: "hidden",
  },
  verifyNotification: {
    borderRadius: Border.br_29xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default VerifyNotification;
