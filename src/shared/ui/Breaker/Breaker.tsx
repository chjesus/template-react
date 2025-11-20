const Breaker = () => {
	throw new Error('Test error boundary')
	// también sirve cualquier variable undefined.property
}

export default Breaker
