import { combineEpics, Epic } from "redux-observable";
import { filter, switchMap } from "rxjs/operators";
import { fetchAbsences } from "./app.reducer";
import { fromFetch } from "rxjs/fetch";
import { Observable, of } from "rxjs";
import { Absences } from "../components/typings";

export const getData = (): Observable<Absences[]> =>
  fromFetch("./data.json").pipe(
    switchMap(response => {
      return response.json();
    })
  );

export const fetchAbsencesEpic: Epic = action$ =>
  action$.pipe(
    filter(fetchAbsences.started.match),
    switchMap(({ payload }) => getData().pipe(switchMap(result => of(fetchAbsences.done({ result, params: payload })))))
  );
