import { useDispatch, useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

import { increment } from '@entities/example/model/exampleSlice'
import { getCountValue } from '@entities/example/model/selectors'

import useConfig from '@shared/hooks/useConfig'
import useDomainTranslation from '@shared/hooks/useDomainTranslations'

import type { I18n } from '@shared/types/theme'

import { ExamplePaperStyled } from './ExampleStyled'

const Example = () => {
	const dispatch = useDispatch()
	const getCountvalue = useSelector(getCountValue)

	const { t, loaded } = useDomainTranslation('example')
	const { onChangeLocalization } = useConfig()

	const handleCount = () => {
		dispatch(increment())
	}

	const handleLocation = (languageCode: I18n) => {
		onChangeLocalization(languageCode)
	}

	if (!loaded) return <div>Cargando...</div>

	return (
		<ExamplePaperStyled elevation={5}>
			<Grid container spacing={2} justifyContent="center" alignItems="center">
				<Grid size="auto">
					<Typography variant="h4" component="h2">
						Boilerplate
					</Typography>
				</Grid>
				<Grid size={12}>
					<Typography variant="h3" component="h1" textAlign="center">
						React + Vite + MUI + Redux + TS
					</Typography>
				</Grid>
				<Grid size="auto">
					<Typography variant="body2" component="p" textAlign="center">
						{t('example.button')}: {getCountvalue}
					</Typography>
					<Button
						variant="contained"
						size="small"
						color="primary"
						onClick={handleCount}
					>
						{t('example.button')}
					</Button>
				</Grid>
				<Grid size={12}>
					<Divider />
				</Grid>
				<Grid size="auto">
					<Button
						variant="outlined"
						onClick={() => handleLocation('es' as I18n)}
						sx={{ mr: 2 }}
					>
						ES
					</Button>
					<Button
						variant="outlined"
						onClick={() => handleLocation('en' as I18n)}
					>
						EN
					</Button>
				</Grid>
			</Grid>
		</ExamplePaperStyled>
	)
}

export default Example
