import { useDispatch, useSelector } from 'react-redux'
import { increment } from '@entities/example/model/exampleSlice'

import { getCountValue } from '@entities/example/model/selectors'
import Typography from '@mui/material/Typography'

const Home = () => {
	const dispatch = useDispatch()
	const getCountvalue = useSelector(getCountValue)
	const handleCount = () => {
		dispatch(increment())
	}

	return (
		<div>
			<h1 className="prueba">Home Page</h1>
			<Typography variant="h1" component="h1">
				Whereas recognition of the inherent dignity
			</Typography>
			<button onClick={handleCount}>Count +1</button>
			<p>Count Value: {getCountvalue}</p>
		</div>
	)
}

export default Home
