/**
 * Each module has it's own container within the store's state. Instead of
 * having to spread the previous state on the container's key we just bind
 * the actions to the container.
 * 
 * How `bindContainer` can clean up our action's code:
 * Before: return { containerKey: { ...state.containerKey, newState } }
 * After:  return { newState }
 */
export default (scope, store) => {
	return (action, callback) => store.on(action, (state, payload) => {
    const currentState = state[scope]
		const nextState = callback(currentState, payload)
		
		return { [scope]: { ...currentState, ...nextState } }
	})
}