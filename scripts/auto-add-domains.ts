import { map } from 'lodash-es'
import { Browser, launch, Page } from 'puppeteer-core'
import { speciesList } from '../src/models/speciesList'

function padZero(num: number, len: number): string {
	return String.prototype.padStart.call(num, len, '0')
}

const browser: Browser = await launch({
	executablePath: process.env.EXEC_PATH,
	userDataDir: process.env.USER_DIR,
	headless: false,
	defaultViewport: null
})

const page: Page = (await browser.pages())[0]

const speciesNames: string[] = map(speciesList, 'name')
speciesNames.unshift('')

const len: number = process.env.PROJECT_NAME ? speciesNames.length : 49
const start: number = Number(process.env.START)
const end: number = start + len
{
	const start2: string = padZero(start, 4)
	const end2: string = padZero(end, 4)
	const projectName: string = process.env.PROJECT_NAME || `${start2}-${end2}`
	const url: string = `https://vercel.com/pokemon-vercel/${projectName}/settings/domains`
	await page.goto(url)
}
await page.waitForNetworkIdle()

const inputSelector: string = 'input[data-testid="domains/alias-domain-input"]'
const errorSelector: string = '[data-testid="domains/alias-domain-input/error"]'

for (let i = start; i <= end; i++) {
	const name: string = speciesNames[i]
	if (name === undefined) break

	await page.focus(inputSelector)
	await page.keyboard.press('Backspace')
	await page.type(inputSelector, `${name}.vercel.app`)
	await page.keyboard.press('Enter')
	await page.waitForSelector(`${inputSelector}:enabled`)

	console.log('%s, %s', i, name)

	const maximum: boolean = await page.evaluate((errorSelector) => {
		const el = document.querySelector<HTMLDivElement>(errorSelector)
		if (!el?.textContent) {
			return false
		}
		return el.textContent.includes('contains maximum allowed number of domains')
	}, errorSelector)
	if (maximum) break
}
