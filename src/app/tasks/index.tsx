import TodoCard from "@/components/todo-card";
import TodoFormModal from "@/components/todo-form-modal";
import { TodoItem, useTodoStore } from "@/store/use-todo-store";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Platform, Pressable, StyleSheet, Text, View } from "react-native";

const addButtonBottomOffset = Platform.OS === 'android' ? 30 : 100;

export default function TasksScreen() {
  const { todos, addTodo, toggleTodo, updateTodo, removeTodo } = useTodoStore();

  const [todoModalVisible, setTodoModalVisible] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");
  const [editingTodo, setEditingTodo] = useState<TodoItem | null>(null);

  const handleCloseTodoModal = () => {
    setTodoModalVisible(false);

    // Delay state reset until after modal close animation finishes.
    // Using setTimeout instead of Modal.onDismiss because onDismiss is unreliable on Android.
    // If we reset state immediately, it causes a visible flicker (value/placeholder change before close).
    // 150ms roughly matches the modal fade animation duration.
    setTimeout(() => {
      setTodoTitle("");
      setEditingTodo(null);
    }, 150);
  }

  const handleSubmitTodo = () => {
    if (editingTodo) {
      updateTodo(editingTodo.id, todoTitle);
    } else {
      addTodo(todoTitle);
    }
  };

  const handleToggleCompleted = (id: string) => {
    toggleTodo(id);
  };

  const handlePressEdit = (todo: TodoItem) => {
    setEditingTodo(todo);
    setTodoTitle(todo.title);
    setTodoModalVisible(true);
  }

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
          renderItem={({ item }) => (
            <TodoCard
              todo={item}
              onToggleCompleted={() => handleToggleCompleted(item.id)}
              onEdit={() => handlePressEdit(item)}
              onDelete={() => handleDelete(item.id)}
            />
          )}
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
        />
      )}

      <Pressable
        style={styles.addButton}
        onPress={() => setTodoModalVisible(true)}
      >
        <FontAwesome6 name="plus" size={20} color="white" />
      </Pressable>

      <TodoFormModal
        visible={todoModalVisible}
        title={editingTodo ? "Edit Task" : "New Task"}
        inputValue={todoTitle}
        inputPlaceholder={editingTodo ? editingTodo.title : "Add a new task"}
        onChange={setTodoTitle}
        onClose={handleCloseTodoModal}
        onSubmit={() => {
          handleSubmitTodo()
          handleCloseTodoModal();
        }}
      />
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
