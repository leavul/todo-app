import { zustandStorage } from "@/storage/todo-storage";
import { TodoItem } from "@/types/todo";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TodoStore = {
    todos: TodoItem[];
    addTodo: (title: string) => void;
    toggleTodo: (id: string) => void;
    updateTodo: (id: string, title: string) => void;
    reorderTodos: (newData: TodoItem[]) => void;
    removeTodo: (id: string) => void;
    clearCompletedTodos: () => void;
    deleteAllTodos: () => void;
}

export const useTodoStore = create<TodoStore>()(persist((set) => ({
    todos: [],

    addTodo: (title) =>
        set((state) => ({
            todos: [...state.todos, { id: Date.now().toString(), title, completed: false }],
        })),

    toggleTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
        })),

    updateTodo: (id, title) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, title } : todo
            ),
        })),

    reorderTodos: (newData) =>
        set({ todos: newData }),

    removeTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),

    clearCompletedTodos: () =>
        set((state) => ({
            todos: state.todos.filter((todo) => !todo.completed),
        })),

    deleteAllTodos: () =>
        set({
            todos: [],
        }),
}), {
    name: 'todo-storage',
    storage: createJSONStorage(() => zustandStorage),
}));
