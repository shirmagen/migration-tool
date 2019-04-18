import {getAll} from '../base.controller'

export const getAllBaskets = async (request) => await getAll(request, 'Basket');