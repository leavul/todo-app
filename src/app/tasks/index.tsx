import TodoCard from "@/components/todo-card";
import TodoFormModal from "@/components/todo-form-modal";
import { useTodoStore } from "@/store/use-todo-store";
import { TodoItem } from "@/types/todo";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";

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
  const { todos, addTodo, toggleTodo, updateTodo, reorderTodos, removeTodo } = useTodoStore();

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
        // TODO: DraggableFlatList is working but needs more testing — e.g. no flickering during
        // drag, smooth reorder animation, correct behavior and etc.

        // Note: a deprecation warning for InteractionManager may appear
        // in dev builds — this comes from the library internals.
        // it uses InteractionManager under the hood, and React Native is deprecating it.
        <DraggableFlatList
          style={styles.todosContainer}
          data={todos}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.todosContentContainer}
          renderItem={({ item, drag, isActive }) => (
            <TodoCard
              todo={item}
              isActive={isActive}
              drag={drag}
              onToggleCompleted={() => handleToggleCompleted(item.id)}
              onEdit={() => handlePressEdit(item)}
              onDelete={() => handleDelete(item.id)}
            />
          )}
          onDragEnd={({ data }) => reorderTodos(data)}
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
    height: '100%',
    backgroundColor: "#212121",
  },
  todosContentContainer: {
    paddingBottom: 120,
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
