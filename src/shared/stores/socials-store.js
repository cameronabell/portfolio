import { create } from "zustand";

export const useSocialsStore = create((set) => ({
    socials: [],
    setSocials: (socials) => set({ socials }),
    addSocial: (social) => set((state) => ({ socials: [...state.socials, social] })),
    removeSocial: (id) => set((state) => ({ socials: state.socials.filter((social) => social.id !== id) })),
    updateSocial: (id, newSocial) => set((state) => ({
        socials: state.socials.map((social) => (social.id === id ? newSocial : social)),
    })),
    clearSocials: () => set({ socials: [] }),
}))
