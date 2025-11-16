import { createSlice } from '@reduxjs/toolkit'
import type { ExampleState } from './types'

const initialState: ExampleState = { value: 0, status: 0 }

const exampleSlice = createSlice({
	name: 'example',
	initialState,
	reducers: {
		increment: state => {
			state.value += 1
		},
		decrement: state => {
			state.value -= 1
		},
	},
})

export const { increment, decrement } = exampleSlice.actions
export default exampleSlice.reducer
