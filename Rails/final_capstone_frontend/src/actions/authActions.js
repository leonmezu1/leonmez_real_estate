import {
  SUBMIT_CREDENTIALS,
  SUBMIT_CREDENTIALS_SUCCESS,
  SUBMIT_CREDENTIALS_ERROR,
} from '../types';

const submitCredentialsStart = () => ({
  type: SUBMIT_CREDENTIALS,
  payload: true,
});

export default /* crearNuevoProductoAction = */ userData => async dispatch => {
  dispatch(submitCredentialsStart(userData)); // delete userData as params

  /* try {
    // Insertar en la API
    await clienteAxios.post('productos', producto);
    // si todo sale bien actualiza el state
    // Alertar
    dispatch(agregarProductoExito(producto));
  } catch (e) {
    // Alertar
    dispatch(agregarProductoError(true));
  } */
};
