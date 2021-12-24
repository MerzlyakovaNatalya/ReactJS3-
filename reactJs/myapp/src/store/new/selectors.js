//export const getTodosFromStore = (state) => state.data;
//export const getTodos = (state) => getTodosFromStore(state).data;
//export const getTodos = (state) => state.data;
//export const getLoading = (state) => getTodosFromStore(state).isLoading;
//export const getError = (state) => getTodosFromStore(state).isError;

export const getTodos = (state) => state.data;
export const getLoading = (state) => state.isLoading;
export const getError = (state) => state.isError;