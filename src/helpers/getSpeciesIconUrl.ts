export function getSpeciesIconUrl(speciesId: number): string {
	const filename: string = speciesId.toString().padStart(3, '0')
	return `https://www.serebii.net/pokedex-swsh/icon/${filename}.png`
}
