import type { Components, Theme } from '@mui/material/styles'

const createComponents = (): Components<Theme> => {
	return {
		// example of overriding MUI component styles
		MuiToolbar: {
			styleOverrides: {
				root: ({ theme }: { theme: Theme }) => ({
					minHeight: '48px',
					[theme.breakpoints.up('sm')]: { minHeight: '100px' },
				}),
			},
		},
	}
}

export default createComponents
