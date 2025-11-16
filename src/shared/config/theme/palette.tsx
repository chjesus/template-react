import type { PaletteMode } from '@mui/material'
import type { ThemeMode } from '@shared/types/theme'
import ThemeOption from './theme'

const Palette = (mode: ThemeMode) => {
	const paletteColor = ThemeOption(mode)
	return {
		palette: { mode: mode as PaletteMode, ...paletteColor, background: {} },
	}
}

export default Palette
