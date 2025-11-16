import { useState, useEffect } from 'react'

function useLocalStorage<ValueType>(key: string, defaultValue: ValueType) {
	const isBrowser = typeof window !== 'undefined'

	const [value, setValue] = useState(() => {
		const storedValue = isBrowser ? localStorage.getItem(key) : null
		return storedValue === null ? defaultValue : JSON.parse(storedValue)
	})

	useEffect(() => {
		const listener = (e: StorageEvent) => {
			if (e.key === key) {
				try {
					setValue(e.newValue ? JSON.parse(e.newValue) : defaultValue)
				} catch {
					setValue(defaultValue)
				}
			}
		}

		window.addEventListener('storage', listener)

		return () => {
			window.removeEventListener('storage', listener)
		}
	}, [key, defaultValue])

	const setValueInLocalStorage = (newValue: ValueType) => {
		setValue((currentValue: ValueType) => {
			const result =
				typeof newValue === 'function' ? newValue(currentValue) : newValue

			if (isBrowser) localStorage.setItem(key, JSON.stringify(result))
			return result
		})
	}

	return [value, setValueInLocalStorage]
}

export default useLocalStorage
