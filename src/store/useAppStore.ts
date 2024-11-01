import { create } from 'zustand'
import { Form, Species } from '../hooks/useGetSpecies'

export interface AppStore {
	species: Species | undefined
	setSpecies: (species: Species) => void
	currentForm: Form | undefined
	setCurrentForm: (form: Form) => void
}

export const useAppStore = create<AppStore>((set) => ({
	species: undefined,
	setSpecies: (species) => set({ species }),
	currentForm: undefined,
	setCurrentForm: (currentForm) => set({ currentForm })
}))
