import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const HomeContainerStyled = styled(Box)(({ theme }) => ({
	background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
}))
