import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Color = () => {
  return (
    <View style={styles.color}>
      <Image
        style={[styles.colorChild, styles.colorChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-56.png")}
      />
      <Image
        style={[styles.colorItem, styles.colorChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-68.png")}
      />
      <Image
        style={[styles.colorInner, styles.colorChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-70.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.colorChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.colorChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={[styles.colorChild2, styles.colorChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-28.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  colorChildLayout: {
    width: 103,
    top: 0,
    position: "absolute",
    height: 104,
  },
  colorChild: {
    left: 324,
  },
  colorItem: {
    left: 0,
  },
  colorInner: {
    left: 768,
  },
  ellipseIcon: {
    left: 486,
  },
  colorChild2: {
    left: 622,
  },
  color: {
    width: 871,
    height: 104,
  },
});

export default Color;
