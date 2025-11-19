import { createContext, useEffect } from 'react'
import i18n from '@shared/config/i18n/config'
import { ThemeMode } from '@shared/types/theme'
import { CONFIG_DEFAULT_USER } from '@shared/consts/configUser'

import type {
	I18n,
	CustomProps,
	PresetColor,
	DefaultCustomProps,
} from '@shared/types/theme'
import type { ReactNode } from 'react'

import useLocalStorage from '@shared/hooks/useLocalStorage'

const initialState: CustomProps = {
	...CONFIG_DEFAULT_USER,
	onChangeMode: () => {},
	onChangePresetColor: () => {},
	onChangeFontFamily: () => {},
	onChangeLocalization: () => {},
}

// =====================|| CONFIG CONTEXT & PROVIDER ||===================== //

const ConfigContext = createContext(initialState)

type ConfigProviderProps = { children: ReactNode }

function ConfigProvider({ children }: ConfigProviderProps) {
	const [storedConfig, setStoredConfig] = useLocalStorage<DefaultCustomProps>(
		'template-user-config',
		CONFIG_DEFAULT_USER
	)

	const onChangeMode = (mode: ThemeMode) => {
		setStoredConfig({ ...storedConfig, mode })
	}

	const onChangePresetColor = (presetColor: PresetColor) => {
		setStoredConfig({ ...storedConfig, presetColor })
	}

	const onChangeFontFamily = (fontFamily: string) => {
		setStoredConfig({ ...storedConfig, fontFamily })
	}

	const onChangeLocalization = (lang: I18n) => {
		setStoredConfig({ ...storedConfig, i18n: lang })
		i18n.changeLanguage(lang)
	}

	useEffect(() => {
		const checkLang = () => {
			try {
				const savedConfig = localStorage.getItem('zalv-user-config')
				if (!savedConfig) {
					i18n.changeLanguage(CONFIG_DEFAULT_USER.i18n)
				}
			} catch {
				// error
			}
		}

		window.addEventListener('storage', checkLang)
		return () => window.removeEventListener('storage', checkLang)
	}, [])

	return (
		<ConfigContext.Provider
			value={{
				...storedConfig,
				onChangeMode,
				onChangePresetColor,
				onChangeFontFamily,
				onChangeLocalization,
			}}>
			{children}
		</ConfigContext.Provider>
	)
}

export { ConfigProvider, ConfigContext }
