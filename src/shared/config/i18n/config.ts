import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import CustomLocalStorageDetector from './languageDetector'

i18n
	.use(CustomLocalStorageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		ns: 'shared',
		defaultNS: 'shared',
		debug: process.env.NODE_ENV === 'development',
		interpolation: { escapeValue: false, skipOnVariables: true },
		resources: {
			en: { common: { loading: 'Loading...', error: 'An error occurred' } },
			es: { common: { loading: 'Cargando...', error: 'Ocurrió un error' } },
		},
		react: { useSuspense: false },
		detection: {
			// 👇 no necesitas configurar lookupLocalStorage aquí,
			// ya que nuestro detector lo maneja internamente
			caches: ['localStorage'],
		},
	})

export default i18n
