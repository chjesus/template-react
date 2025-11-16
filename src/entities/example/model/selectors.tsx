import { createSelector } from '@reduxjs/toolkit'
import type { ExampleState } from './types'

export const exampleState = (state: { example: ExampleState }) => state.example

export const getCountValue = createSelector(exampleState, example => {
	return example.value
})
