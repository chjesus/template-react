import { ThemeMode } from '@shared/types/theme'

function theme(mode: ThemeMode) {
	// const TEXT = mode === ThemeMode.DARK ? TEXT_COLOR_DARK : TEXT_COLOR

	return {
		primary: { main: '#797cd2' },
		secondary: { main: '#393e9e' },
		// contrastText: CONTRAST_TEXT,
		// error: {},
		// warning: {},
		// info: {},
		// success: {},
		// action: {},
		// text: { primary: TEXT[0], secondary: TEXT[1], disabled: TEXT[2] },
		// common: { black: COMMON_COLOR[0], white: COMMON_COLOR[1] },
		// divider: DIVIDER_COLOR,
	}
}

export default theme
