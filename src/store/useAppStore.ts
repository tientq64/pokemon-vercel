import { Species } from '../hooks/useGetSpecies'
import { create } from 'zustand'

export interface AppStore {
	species: Species | undefined
	setSpecies: (species: Species) => void
}

export const useAppStore = create<AppStore>((set) => ({
	species: undefined,
	setSpecies: (species) => set({ species })
}))
