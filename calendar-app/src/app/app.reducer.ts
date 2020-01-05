import { Action, Reducer } from "redux";
import actionCreatorFactory, { isType } from "typescript-fsa";
import { Absences } from "../components/typings";

const actionCreator = actionCreatorFactory();

export const fetchAbsences = actionCreator.async<string, Absences[], string>("FETCH_ABSENCES");

export interface AbsencesState {
  absences: Absences[];
  errorMessage: string;
  isFetching: boolean;
}

export const initAbsenceState: AbsencesState = {
  absences: [],
  errorMessage: "error state",
  isFetching: false
};

export const absenceReducer: Reducer = (state: AbsencesState = initAbsenceState, action: Action): AbsencesState => {
  if (isType(action, fetchAbsences.started)) {
    return { ...state, isFetching: true };
  }
  if (isType(action, fetchAbsences.done)) {
    return { ...state, isFetching: false, absences: action.payload.result };
  }
  if (isType(action, fetchAbsences.failed)) {
    return { ...state, isFetching: false, errorMessage: action.payload.error };
  }
  return state;
};
