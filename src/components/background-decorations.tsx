import { StyleSheet, View } from "react-native";

export default function BackgroundDecorations() {
  return (
    <>
      <View pointerEvents="none" style={styles.firstCircle} />
      <View pointerEvents="none" style={styles.secondCircle} />
    </>
  );
}

const styles = StyleSheet.create({
  firstCircle: {
    position: "absolute",
    left: -96,
    top: -40,
    height: 256,
    width: 256,
    borderRadius: 128,
    backgroundColor: "#303030",
  },
  secondCircle: {
    position: "absolute",
    right: -80,
    top: 120,
    height: 288,
    width: 288,
    borderRadius: 144,
    backgroundColor: "#303030",
  },
})