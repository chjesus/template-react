// ErrorBoundary.tsx
import React from 'react'
// import { useLocation } from 'react-router'
import { ErrorBoundaryWrapper } from './ErrorBoundaryWrapper'

interface Props {
	children: React.ReactNode
	fallback?: React.ReactNode
	onError?: (error: Error, info: React.ErrorInfo) => void
}

const ErrorBoundary = (props: Props) => {
	const { children, fallback, onError } = props
	// const location = useLocation()

	return (
		<ErrorBoundaryWrapper
			fallback={fallback}
			onError={onError}
			// resetKey={location.pathname} // <- esta magia permite el reset automático
		>
			{children}
		</ErrorBoundaryWrapper>
	)
}

export default ErrorBoundary
