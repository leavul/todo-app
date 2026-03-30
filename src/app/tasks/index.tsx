import TodoCard from "@/components/todo-card";
import { useTodoStore } from "@/store/use-todo-store";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Keyboard, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";

const addButtonBottomOffset = Platform.OS === 'android' ? 30 : 100;

export default function TasksScreen() {
  const { todos, toggleTodo, addTodo, removeTodo } = useTodoStore();

  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleAddTodo = () => {
    if (newTodoTitle.trim() === "") return;

    addTodo(newTodoTitle.trim());
    setNewTodoTitle("");
    Keyboard.dismiss();
  }

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

      <KeyboardAvoidingView
        style={styles.addTodoContainer}
        behavior={'padding'}
        keyboardVerticalOffset={16}
      >
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          placeholderTextColor="#757575"
          value={newTodoTitle}
          onChangeText={setNewTodoTitle}
        />
        <Pressable
          style={styles.addButton}
          onPress={handleAddTodo}
        >
          <FontAwesome6 name="plus" size={20} color="white" />
        </Pressable>
      </KeyboardAvoidingView>
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

  addTodoContainer: {
    position: "absolute",
    bottom: addButtonBottomOffset,
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 8
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#2d2d2d",
    borderWidth: 1,
    borderColor: "#484848",
    borderRadius: 12,
    paddingHorizontal: 16,
    color: "white",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.4)",
  },
  addButton: {
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
