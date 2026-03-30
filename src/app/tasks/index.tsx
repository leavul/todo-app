import TaskItem from "@/components/task-item";
import { taskItems } from "@/constants/dummy-data";
import { FlatList, StyleSheet } from "react-native";

export default function TasksScreen() {
  return (
    <FlatList
      style={styles.container}
      data={taskItems}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.taskListContainer}
      renderItem={({ item }) => <TaskItem task={item} />}
      contentInsetAdjustmentBehavior="automatic"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
  },
  taskListContainer: {
    padding: 16,
    gap: 16,
  }
});
