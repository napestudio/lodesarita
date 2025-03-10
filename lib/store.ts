import { create } from "zustand";
import Lenis from "@studio-freight/lenis/types";

interface Store {
  scroller: Lenis | null;
  setScroller: (v: Lenis) => void;

  stage: "in" | "out" | "none";
  setStage: (v: "in" | "out" | "none") => void;

  isMenuOpen: boolean;
  setIsMenuOpen: (v: boolean) => void;

  isIndexOpen: boolean;
  setIsIndexOpen: (v: boolean) => void;

  isModalOpen: boolean;
  setIsModalOpen: (v: boolean) => void;

  selectedValue: "doble" | "triple" | "matrimonial" | null;
  setSelectedValue: (v: "doble" | "triple" | "matrimonial" | null) => void;

  openModalWithSelection: (
    initialValue?: "doble" | "triple" | "matrimonial" | null
  ) => void;
}

export const useGlobal = create<Store>((set) => ({
  scroller: null,
  setScroller: (scroller) => set({ scroller }),

  stage: "none",
  setStage: (stage: "in" | "out" | "none") => set({ stage }),

  isMenuOpen: false,
  setIsMenuOpen: (isMenuOpen) => set({ isMenuOpen }),

  isIndexOpen: false,
  setIsIndexOpen: (isIndexOpen) => set({ isIndexOpen }),

  isModalOpen: false,
  setIsModalOpen: (isModalOpen) => set({ isModalOpen }),

  selectedValue: null,
  setSelectedValue: (selectedValue) => set({ selectedValue }),

  openModalWithSelection: (initialValue = null) =>
    set({
      isModalOpen: true,
      selectedValue: initialValue,
    }),
}));
