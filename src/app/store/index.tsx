import { configureStore } from '@reduxjs/toolkit'
import exampleSlice from '@entities/example/model/exampleSlice'

// Minimal declaration to satisfy TypeScript in browser context
declare const process: { env: { NODE_ENV?: string } }

const store = configureStore({
	reducer: {
		// your reducers here
		example: exampleSlice,
	},
	devTools: process.env.NODE_ENV !== 'production',
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
