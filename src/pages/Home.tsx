import Example from '@entities/example/ui'
import { HomeContainerStyled } from './HomeStyled'

const Home = () => {
	return (
		<HomeContainerStyled sx={{ p: 4 }}>
			<Example />
		</HomeContainerStyled>
	)
}

export default Home
