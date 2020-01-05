import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import { logger, observableMiddleware } from "./app.middleware";
import { absenceReducer, AbsencesState, initAbsenceState } from "./app.reducer";
import { combineEpics } from "redux-observable";
import { fetchAbsencesEpic } from "./app.epic";

export interface AppState {
  absences: AbsencesState;
}

export const initialAppState: AppState = {
  absences: initAbsenceState
};

export const rootReducer: Reducer = combineReducers({
  absences: absenceReducer
});

export const rootEpic = combineEpics(fetchAbsencesEpic);

export const configureStore = () => {
  const store = createStore(rootReducer, initialAppState, applyMiddleware(logger, observableMiddleware));
  observableMiddleware.run(rootEpic);
  return store;
};
