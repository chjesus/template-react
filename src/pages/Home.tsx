import { useDispatch, useSelector } from 'react-redux'
import { increment } from '@entities/example/model/exampleSlice'

import { getCountValue } from '@entities/example/model/selectors'
import Typography from '@mui/material/Typography'
import useDomainTranslation from '@shared/hooks/useDomainTranslations'
import useConfig from '@shared/hooks/useConfig'

import type { I18n } from '@shared/types/theme'

const Home = () => {
	const dispatch = useDispatch()
	const { onChangeLocalization } = useConfig()
	const { t, loaded } = useDomainTranslation('example')
	const getCountvalue = useSelector(getCountValue)

	const handleCount = () => {
		dispatch(increment())
	}

	const handleLocation = (languageCode: I18n) => {
		onChangeLocalization(languageCode)
	}

	if (!loaded) return <div>Cargando...</div>

	return (
		<div>
			<h1 className="prueba">Home Page {t('example.title')}</h1>
			<Typography variant="h1" component="h1">
				Whereas recognition of the inherent dignity
			</Typography>
			<button onClick={handleCount}>Count +1</button>
			<button onClick={() => handleLocation('es' as I18n)}>cambiar a es</button>
			<button onClick={() => handleLocation('en' as I18n)}>cambiar a en</button>
			<p>Count Value: {getCountvalue}</p>
		</div>
	)
}

export default Home
