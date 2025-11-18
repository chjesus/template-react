import { useDispatch, useSelector } from 'react-redux'
import { increment } from '@entities/example/model/exampleSlice'

import { getCountValue } from '@entities/example/model/selectors'
import Typography from '@mui/material/Typography'
import useDomainTranslations from '@shared/hooks/useDomainTranslations'

const Home = () => {
	const dispatch = useDispatch()
	const { t } = useDomainTranslations('common')
	const getCountvalue = useSelector(getCountValue)
	const handleCount = () => {
		dispatch(increment())
	}

 
	return (
		<div>
	<h1 className="prueba">Home Page {t('loading')}</h1>		<Typography variant="h1" component="h1">
				Whereas recognition of the inherent dignity
			</Typography>
			<button onClick={handleCount}>Count +1</button>
			<p>Count Value: {getCountvalue}</p>
		</div>
	)
}

export default Home
