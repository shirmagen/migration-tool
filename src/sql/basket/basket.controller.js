import {getAll} from '../base.controller'

export const getAllBaskets = async request => getAll(request, 'Basket')