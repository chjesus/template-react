import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

export const ExamplePaperStyled = styled(Paper)(({ theme }) => ({
	maxWidth: 600,
	padding: theme.spacing(4),
}))
