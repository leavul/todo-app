import { zustandStorage } from "@/storage";
import { TaskItem } from "@/types/task";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TaskStore = {
    tasks: TaskItem[];
    addTask: (title: string) => void;
    toggleTask: (id: string) => void;
    updateTask: (id: string, title: string) => void;
    reorderTasks: (newData: TaskItem[]) => void;
    removeTask: (id: string) => void;
    clearCompletedTasks: () => void;
    deleteAllTasks: () => void;
}

export const useTaskStore = create<TaskStore>()(persist((set) => ({
    tasks: [],

    addTask: (title) =>
        set((state) => ({
            tasks: [...state.tasks, { id: Date.now().toString(), title, completed: false }],
        })),

    toggleTask: (id) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            ),
        })),

    updateTask: (id, title) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, title } : task
            ),
        })),

    reorderTasks: (newData) =>
        set({ tasks: newData }),

    removeTask: (id) =>
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
        })),

    clearCompletedTasks: () =>
        set((state) => ({
            tasks: state.tasks.filter((task) => !task.completed),
        })),

    deleteAllTasks: () =>
        set({
            tasks: [],
        }),
}), {
    name: 'tasks-storage',
    storage: createJSONStorage(() => zustandStorage),
}));
