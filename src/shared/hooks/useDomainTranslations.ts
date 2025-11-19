import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '@shared/config/i18n/config'

export default function useDomainTranslation(domain: string) {
	const [loaded, setLoaded] = useState(false)
	const { t, ...rest } = useTranslation(domain)

	useEffect(() => {
		async function load() {
			const lang = i18n.language
			try {
				const translations = await import(
					`../../entities/${domain}/locale/${lang}/${domain}.json`
				)
				i18n.addResourceBundle(lang, domain, translations, true, true)
				setLoaded(true)
			} catch {
				console.warn(`No se encontraron traducciones para ${domain}`)
			}
		}
		load()
	}, [domain])

	return { t, loaded, ...rest }
}
