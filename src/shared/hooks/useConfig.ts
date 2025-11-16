import { useContext } from 'react'

import { ConfigContext } from '@app/providers/ConfigContext'

const useConfig = () => {
	return useContext(ConfigContext)
}

export default useConfig
