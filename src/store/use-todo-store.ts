import { dummyData } from "@/constants/dummy-data";
import { create } from "zustand";

export type TodoItem = {
    id: string;
    title: string;
    completed: boolean;
}

type TodoStore = {
    todos: TodoItem[];
    addTodo: (title: string) => void;
    toggleTodo: (id: string) => void;
    updateTodo: (id: string, title: string) => void;
    removeTodo: (id: string) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
    todos: [...dummyData],

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

    removeTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
}));