export const ThemeMode = { LIGHT: 'light', DARK: 'dark' } as const

export type ThemeMode = (typeof ThemeMode)[keyof typeof ThemeMode]

export type PresetColor = 'default' | 'custom'

export type I18n = 'en' | 'es'

export type DefaultCustomProps = {
	mode: ThemeMode
	fontFamily: string
	presetColor: PresetColor
	i18n: I18n
}

export type CustomProps = {
	mode: ThemeMode
	fontFamily: string
	presetColor: PresetColor
	onChangeMode: (mode: ThemeMode) => void
	onChangePresetColor: (presetColor: string) => void
	onChangeFontFamily: (fontFamily: string) => void
	onChangeLocalization: (lang: I18n) => void
}
