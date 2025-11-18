import type { PaletteMode } from '@mui/material'
import type { ThemeMode } from '@shared/types/theme'
import ThemeOption from './theme'

// example new background
declare module '@mui/material/styles' {
	interface TypeBackground {
		newbackground: string
	}
}

const Palette = (mode: ThemeMode) => {
	const paletteColor = ThemeOption(mode)
	return {
		mode: mode as PaletteMode,
		...paletteColor,
		background: { newbackground: '#444' },
	}
}

export default Palette
