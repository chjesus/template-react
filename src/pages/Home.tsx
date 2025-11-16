import { useDispatch, useSelector } from 'react-redux'
import { increment } from '@entities/example/model/exampleSlice'

import { getCountValue } from '@entities/example/model/selectors'

const Home = () => {
	const dispatch = useDispatch()
	const getCountvalue = useSelector(getCountValue)
	const handleCount = () => {
		dispatch(increment())
	}

	return (
		<div>
			Home Page
			<button onClick={handleCount}>Count +1</button>
			<p>Count Value: {getCountvalue}</p>
		</div>
	)
}

export default Home
