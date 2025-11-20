const GlobalError = () => {
	return (
		<div style={{ padding: 40 }}>
			<h1>Ups! Algo salió mal</h1>
			<p>La aplicación encontró un error inesperado.</p>
			<button onClick={() => window.location.reload()}>
				Recargar aplicación
			</button>
		</div>
	)
}

export default GlobalError
