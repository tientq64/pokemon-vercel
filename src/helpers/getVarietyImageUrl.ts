export function getVarietyImageUrl(
	speciesName: string,
	varietyName: string,
	isDefault: boolean,
	useSmogonUrl: boolean
): string {
	let filename: string = isDefault ? speciesName : varietyName
	if (useSmogonUrl) {
		return `https://www.smogon.com/dex/media/sprites/xy/${filename}.gif`
	}
	if (isDefault) {
		filename = filename.replace(/-/g, '')
	}
	return `https://play.pokemonshowdown.com/sprites/ani/${filename}.gif`
}
