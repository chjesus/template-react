import { createBrowserRouter } from 'react-router'

import HomePage from '@pages/Home'
import Error404Page from '@pages/Error404'
import GlobalError from '@shared/ui/GlobalError'

const router = createBrowserRouter([
	{
		path: '/',
		index: true,
		element: <HomePage />,
		errorElement: <GlobalError />,
	},
	{ path: '*', element: <Error404Page />, errorElement: <GlobalError /> },
])

export default router
