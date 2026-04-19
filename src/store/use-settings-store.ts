import { zustandStorage } from "@/storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type SettingsStore = {
    columns: 1 | 2;
    setColumns: (columns: 1 | 2) => void;
}

export const useSettingsStore = create<SettingsStore>()(persist((set) => ({
    columns: 2,

    setColumns: (columns) => set({ columns }),
}), {
    name: 'settings-storage',
    storage: createJSONStorage(() => zustandStorage),
}));
