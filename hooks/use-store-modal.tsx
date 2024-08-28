import {create} from "zustand";

interface useStoreModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useStoreModalStore = create<useStoreModalStore>((set: (arg0: { isOpen: boolean; }) => any) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false}),
}))