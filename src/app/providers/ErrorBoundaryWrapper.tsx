// ErrorBoundaryWrapper.tsx
import React from 'react'

interface ErrorBoundaryProps {
	children: React.ReactNode
	fallback?: React.ReactNode
	onError?: (error: Error, info: React.ErrorInfo) => void
}

interface ErrorBoundaryState {
	hasError: boolean
	error?: Error
}

export class ErrorBoundaryWrapper extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error }
	}

	componentDidCatch(error: Error, info: React.ErrorInfo) {
		if (this.props.onError) {
			this.props.onError(error, info)
		}
	}

	render() {
		if (this.state.hasError) {
			return (
				this.props.fallback ?? (
					<div style={{ padding: 20 }}>
						<h2>Ocurrió un error inesperado</h2>
						<p>Intenta nuevamente.</p>
					</div>
				)
			)
		}

		return this.props.children
	}
}
