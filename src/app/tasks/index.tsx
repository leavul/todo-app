import TodoCard from "@/components/todo-card";
import TodoFormModal from "@/components/todo-form-modal";
import { useTodoStore } from "@/store/use-todo-store";
import { TodoItem } from "@/types/todo";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Platform, Pressable, StyleSheet, Text, View } from "react-native";

const addButtonBottomOffset = Platform.OS === 'android' ? 30 : 100;

type TodoFormModalState = {
  visible: boolean;
  mode: "add" | "edit";
  title: string;
  editingTodoId: string | null;
  inputValue: string;
  placeholder: string;
  showError?: boolean;
};

export default function TasksScreen() {
  const { todos, addTodo, toggleTodo, updateTodo, removeTodo } = useTodoStore();

  const [todoFormModalState, setTodoFormModalState] = useState<TodoFormModalState | null>(null);

  const handleCloseTodoModal = () => {
    setTodoFormModalState((currentState) => {
      if (currentState === null) {
        return null;
      }

      return {
        ...currentState,
        visible: false,
      };
    });
  }

  const handleSubmitTodo = () => {
    if (!todoFormModalState) return;

    if (todoFormModalState?.mode === "add") {
      todoFormModalState.inputValue && addTodo(todoFormModalState.inputValue);
    } else if (todoFormModalState?.mode === "edit") {
      todoFormModalState.editingTodoId && updateTodo(todoFormModalState.editingTodoId, todoFormModalState.inputValue);
    }
  };

  const handleToggleCompleted = (id: string) => {
    toggleTodo(id);
  };

  const handlePressEdit = (todo: TodoItem) => {
    setTodoFormModalState({
      visible: true,
      mode: "edit",
      title: "Edit Task",
      editingTodoId: todo.id,
      inputValue: todo.title,
      placeholder: todo.title,
    });
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
        // TODO: Replace with DraggableFlatList to allow reordering of todos
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
        onPress={() =>
          setTodoFormModalState({
            visible: true,
            mode: "add",
            title: "New Task",
            editingTodoId: null,
            inputValue: "",
            placeholder: "Add a new task",
          })
        }
      >
        <FontAwesome6 name="plus" size={20} color="white" />
      </Pressable>

      <TodoFormModal
        visible={todoFormModalState?.visible ?? false}
        title={todoFormModalState?.title ?? ""}
        inputValue={todoFormModalState?.inputValue ?? ""}
        inputPlaceholder={todoFormModalState?.placeholder ?? ""}
        showError={todoFormModalState?.showError ?? false}
        onChange={(inputValue) => setTodoFormModalState((currentState) => currentState ? { ...currentState, inputValue } : null)}
        onChangeShowError={(showError) => setTodoFormModalState((currentState) => currentState ? { ...currentState, showError } : null)}
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
