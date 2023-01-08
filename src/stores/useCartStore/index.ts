import create from "zustand";

import { iUseCartStore } from "./@types";

export const useCartStore = create<iUseCartStore>((set) => ({
  isOpenCartModal: false,
  setIsOpenCartModal: (): void =>
    set((state) => ({ isOpenCartModal: !state.isOpenCartModal })),
}));
