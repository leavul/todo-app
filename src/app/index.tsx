import BackgroundDecorations from "@/components/background-decorations";
import TaskItem from "@/components/task-item";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <View style={styles.container}>
      <BackgroundDecorations />

      <SafeAreaView>
        <TaskItem />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
  },
});
