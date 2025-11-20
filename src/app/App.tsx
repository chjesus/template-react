import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'

import { ConfigProvider } from '@app/providers/ConfigContext'
import MuiProvider from '@app/providers/MuiProvider'
import router from '@app/router'
import store from '@app/store'
import ErrorBoundary from '@app/providers/ErrorBoundary'
import GlobalError from '@shared/ui/GlobalError'

const App = () => {
	return (
		<Provider store={store}>
			<ConfigProvider>
				<ErrorBoundary fallback={<GlobalError />}>
					<MuiProvider>
						<RouterProvider router={router} />
					</MuiProvider>
				</ErrorBoundary>
			</ConfigProvider>
		</Provider>
	)
}

export default App
