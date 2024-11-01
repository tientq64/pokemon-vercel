import { map } from 'lodash-es'
import { speciesList } from '../models/speciesList'

const isVercelHost: boolean = location.hostname.endsWith('.vercel.app')
const speciesNames: string[] = map(speciesList, 'name')

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
		if (nationalNo >= 1 && nationalNo <= speciesNames.length) {
			return speciesNames[nationalNo - 1]
		}
		return ''
	}

	if (speciesNames.includes(speciesNameOrNationalNo)) {
		return speciesNameOrNationalNo
	}
	return ''
}
