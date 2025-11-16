import { useMemo } from 'react'

import {
	StyledEngineProvider,
	ThemeProvider,
	createTheme,
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import useConfig from '@shared/hooks/useConfig'
import Palette from '@shared/config/theme/palette'

import type { ReactNode } from 'react'
import type { ThemeOptions } from '@mui/material/styles'

type ChildrenProps = { children: ReactNode }

const MuiProvider = ({ children }: ChildrenProps) => {
	const { mode } = useConfig()
	const theme = useMemo(() => Palette(mode), [mode])

	const themeOptions: ThemeOptions = useMemo<ThemeOptions>(
		() => ({ cssVariables: true, palette: theme.palette }),
		[theme]
	)

	const MuiTheme = createTheme(themeOptions)

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={MuiTheme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</StyledEngineProvider>
	)
}

export default MuiProvider
