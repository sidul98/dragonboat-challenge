import {
  FETCH_PROJECT,
  FETCH_PROJECTS,
  REMOVE_PROJECT,
  REMOVE_PROJECT_PENDING,
  REMOVE_PROJECT_REJECTED,
} from "./types";

const initialState = {
  byId: {},
  ids: [],
  removed: false,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS: {
      const data = action.payload || [];
      return {
        ...state,
        byId: data.reduce((byId, p) => ({ ...byId, [p.id]: p }), state.byId),
        ids: data.map((p) => p.id),
      };
    }
    case FETCH_PROJECT: {
      const data = action.payload;

      if (!data) return state;

      return {
        ...state,
        byId: {
          ...state.byId,
          [data.id]: data,
        },
      };
    }
    case REMOVE_PROJECT_PENDING: {
      return {
        ...state,
        removed: false,
        isLoading: true,
      };
    }
    case REMOVE_PROJECT: {
      return {
        ...state,
        removed: true,
        isLoading: false,
      };
    }
    case REMOVE_PROJECT_REJECTED: {
      return {
        ...state,
        removed: false,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
