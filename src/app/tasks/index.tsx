import TodoCard from "@/components/todo-card";
import { useTodoStore } from "@/store/use-todo-store";
import { FontAwesome6 } from "@expo/vector-icons";
import { FlatList, Platform, Pressable, StyleSheet, Text, View } from "react-native";

const addButtonBottomOffset = Platform.OS === 'android' ? 30 : 100;

export default function TasksScreen() {
  const { todos, toggleTodo, removeTodo } = useTodoStore();

  const handleToggleCompleted = (id: string) => {
    toggleTodo(id);
  };

  const handleDelete = (id: string) => {
    removeTodo(id);
  };

  return (
    <>
      {todos.length === 0 ? (
        <View style={styles.noTodosContainer}>
          <Text style={styles.noTodosText}>There is no tasks</Text>
          <Text style={styles.noTodosText}>Add one to get started 🚀</Text>
        </View>
      ) : (
        <FlatList
          style={styles.todosContainer}
          data={todos}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.todosContentContainer}
          renderItem={({ item }) => <TodoCard todo={item} onToggleCompleted={handleToggleCompleted} onDelete={handleDelete} />}
          ListEmptyComponent={() => (
            <View style={styles.noTodosContainer}>
              <Text style={styles.noTodosText}>There is no tasks</Text>
              <Text style={styles.noTodosText}>Add one to get started 🚀</Text>
            </View>
          )}
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
        />
      )}

      <Pressable style={styles.addButton}>
        <FontAwesome6 name="plus" size={20} color="white" />
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  noTodosContainer: {
    flex: 1,
    backgroundColor: "#212121",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  noTodosText: {
    color: "#757575",
  },

  todosContainer: {
    flex: 1,
    backgroundColor: "#212121",
  },
  todosContentContainer: {
    padding: 16,
    paddingBottom: 120,
    gap: 16,
  },

  addButton: {
    position: "absolute",
    bottom: addButtonBottomOffset,
    right: 24,
    height: 56,
    width: 56,
    backgroundColor: "#303030",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#484848",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.4)",
  },
});
