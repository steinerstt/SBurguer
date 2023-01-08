import create from "zustand";
import { iUseAuthStore, iUser } from "./@types";

export const useUserStore = create<iUseAuthStore>((set) => ({
  user: {} as iUser,
  setUser: (user: iUser): void => set({ user: user }),
}));
