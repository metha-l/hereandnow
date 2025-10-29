import { create } from 'zustand'

type UIState = {
  modalOpen: boolean
  toggleModal: () => void
}

const useUI = create<UIState>((set) => ({
  modalOpen: false,
  toggleModal: () => set((s) => ({ modalOpen: !s.modalOpen })),
}))

export default useUI
