import { create } from "zustand";

export const useMainMenuStore = create((set) => ({
    opened: false,
    toggleMenu: () => set((state) => ({ opened: !state.opened })),
}));
