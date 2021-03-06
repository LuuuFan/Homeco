import * as APIUtilService from '../util/service_utils';
import {receiveErrors} from './error_actions';


export const RECEIVE_SERVICE = 'RECEIVE_SERVICE';

export const receiveService = (service) => ({
  type: RECEIVE_SERVICE,
  service
});

export const receiveServices = (services) => ({
  type: RECEIVE_SERVICE,
  services
});

export const fetchService = (id) => dispatch => (
  APIUtilService.fetchService(id).then(
    (service) => (dispatch(receiveService(service))),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)))
  )
);
