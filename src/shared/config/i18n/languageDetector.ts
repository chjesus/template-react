import type { LanguageDetectorModule } from 'i18next'

const CustomLocalStorageDetector: LanguageDetectorModule = {
	type: 'languageDetector',
	init: () => {},
	detect: () => {
		try {
			const stored = localStorage.getItem('zalv-user-config')
			if (stored) {
				const parsed = JSON.parse(stored)
				if (parsed.i18n) return parsed.i18n
			}
		} catch {
			// Error si se necesita
		}

		return 'es'
	},
}

export default CustomLocalStorageDetector
