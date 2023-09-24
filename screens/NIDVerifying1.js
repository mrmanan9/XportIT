import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const NIDVerifying1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nidVerifying}>
      <Pressable
        style={styles.verify}
        onPress={() => navigation.navigate("NIDVerifying")}
      >
        <Text
          style={[styles.yourVerificationIs, styles.verifyingFlexBox]}
        >{`Your verification is pending. You can start using the app 
while we verify your details. It could take upto 24 hours for 
the verification Thank You`}</Text>
        <Text style={[styles.verifying, styles.verifyingFlexBox]}>
          Verifying...
        </Text>
        <Image
          style={styles.verifyChild}
          contentFit="cover"
          source={require("../assets/ellipse-71.png")}
        />
        <Image
          style={styles.verifyItem}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  verifyingFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  yourVerificationIs: {
    top: 43,
    left: 0,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkslategray,
  },
  verifying: {
    marginLeft: -156.5,
    top: 0,
    left: "50%",
    fontSize: FontSize.size_6xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorCornflowerblue,
  },
  verifyChild: {
    top: 250,
    left: 233,
    width: 72,
    height: 72,
    position: "absolute",
  },
  verifyItem: {
    top: 273,
    left: 256,
    width: 24,
    height: 22,
    position: "absolute",
  },
  verify: {
    top: 381,
    left: 66,
    width: 313,
    height: 322,
    position: "absolute",
  },
  nidVerifying: {
    borderRadius: Border.br_29xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default NIDVerifying1;
