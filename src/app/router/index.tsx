import { createBrowserRouter } from 'react-router'

import HomePage from '@pages/Home'
import Error404Page from '@pages/Error404'

const router = createBrowserRouter([
	{ path: '/', index: true, element: <HomePage /> },
	{ path: '*', element: <Error404Page /> },
])

export default router
