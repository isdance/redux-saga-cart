import * as sagas from './sagas';

export const initSagas = (sagaMiddileware) => {
  Object.values(sagas).forEach(sagaMiddileware.run.bind(sagaMiddileware));
}

