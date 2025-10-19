import { create } from "zustand";

export const useViewsStore = create((set) => ({
    resume: null,
    setResume: (resume) => set({ resume }),
}));
