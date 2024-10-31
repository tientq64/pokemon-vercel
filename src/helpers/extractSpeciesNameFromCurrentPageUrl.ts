import { speciesNames } from '../models/speciesNames'

const isVercelHost: boolean = location.hostname.endsWith('.vercel.app')

export function extractSpeciesNameFromCurrentPageUrl(): string {
	if (isVercelHost) {
		const speciesNameOrDomainName: string = location.hostname.split('.')[0]
		if (speciesNames.includes(speciesNameOrDomainName)) {
			return speciesNameOrDomainName
		}
	}

	const speciesNameOrNationalNo: string = location.pathname.substring(1)
	if (/^\d{1,4}$/.test(speciesNameOrNationalNo)) {
		const nationalNo: number = Number(speciesNameOrNationalNo)
		return speciesNames.at(nationalNo - 1) ?? ''
	}

	if (speciesNames.includes(speciesNameOrNationalNo)) {
		return speciesNameOrNationalNo
	}
	return ''
}
