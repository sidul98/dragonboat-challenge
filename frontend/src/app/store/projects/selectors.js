import { createSelector } from "reselect";

export const selectProjects = createSelector(
  (state) => state.projects.byId,
  (state) => state.projects.ids,
  (byId, ids) => ids.map((id) => byId[id])
);

export const selectProject = createSelector(
  (state) => state.projects.byId,
  (_, id) => id,
  (byId, id) => byId[id]
);

export const selectIsLoading = createSelector(
  (state) => state?.projects.isLoading
);
