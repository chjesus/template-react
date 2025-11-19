import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'

import { ConfigProvider } from '@app/providers/ConfigContext'
import MuiProvider from '@app/providers/MuiProvider'
import router from '@app/router'
import store from '@app/store'

const App = () => {
	return (
		<Provider store={store}>
			<ConfigProvider>
				<MuiProvider>
					<RouterProvider router={router} />
				</MuiProvider>
			</ConfigProvider>
		</Provider>
	)
}

export default App
