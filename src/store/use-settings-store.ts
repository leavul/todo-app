import { zustandStorage } from "@/storage";
import { Language, TaskNumbering, TasksGridColumns } from "@/types/settings";
import i18n from "i18next";
import { I18nManager, NativeModules } from "react-native";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// TODO: on first launch, get device language; after that, rely on stored preference
const deviceLanguage = 'ar';

type SettingsStore = {
    showTaskNumbers: TaskNumbering;
    tasksGridColumns: TasksGridColumns;

    setTasksGridColumns: (columns: TasksGridColumns) => void;
    setShowTaskNumbers: (taskNumbering: TaskNumbering) => void;

    language: Language,
    setLanguage: (language: Language) => void;
}

export const useSettingsStore = create<SettingsStore>()(persist((set) => ({
    showTaskNumbers: 'none',
    tasksGridColumns: 1,

    setShowTaskNumbers: (taskNumbering) => set({ showTaskNumbers: taskNumbering }),
    setTasksGridColumns: (columns) => set({ tasksGridColumns: columns }),

    language: deviceLanguage,
    setLanguage: (language) => {
        set({ language });

        i18n.changeLanguage(language);
        I18nManager.allowRTL(language === 'ar');
        I18nManager.forceRTL(language === 'ar');

        NativeModules.DevSettings.reload();
    }
}), {
    name: 'settings-storage',
    storage: createJSONStorage(() => zustandStorage),
}));
