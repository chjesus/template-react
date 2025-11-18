import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

type DomainNamespace = string

const useDomainTranslations = (domain: DomainNamespace) => {
	const { i18n, t, ready } = useTranslation([domain])

	useEffect(() => {
		// Cargar el namespace del dominio si no está cargado
		// if (!i18n.hasResourceBundle(i18n.language, domain)) {
		i18n.loadNamespaces(domain)
		// }
	}, [domain, i18n])

	return { t, ready }
}

export default useDomainTranslations
