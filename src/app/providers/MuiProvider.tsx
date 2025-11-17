import { use, useMemo } from 'react'

import {
	StyledEngineProvider,
	ThemeProvider,
	createTheme,
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import useConfig from '@shared/hooks/useConfig'
import Palette from '@shared/config/theme/palette'
import Typography from '@shared/config/theme/typography'
import createComponents from '@shared/config/theme/components'

import type { ReactNode } from 'react'
import type { ThemeOptions } from '@mui/material/styles'

type ChildrenProps = { children: ReactNode }

const MuiProvider = ({ children }: ChildrenProps) => {
	const { mode } = useConfig()

	const palette = useMemo(() => Palette(mode), [mode])
	const typography = useMemo(() => Typography(), [])
	const components = useMemo(() => createComponents(), [])

	const themeOptions: ThemeOptions = useMemo<ThemeOptions>(
		() => ({
			cssVariables: { cssVarPrefix: 'example' },
			palette: palette,
			typography: typography,
			components: components,
		}),
		[palette, typography, components]
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
