import empty from 'http-reject-empty';
import _ from 'lodash';
import {Basket} from './basket.model';

export function find () {
  return Basket.find({});
}

export function findById ({params: {id}}) {
  return Basket.findById(id)
    .then(empty);
}

export async function create (body) {
  const result = await Basket.create(body);

    if(!result) {
      return console.log(basket + 'failed to be inserted to mongo db');
    }

    return result;
}

export function update ({params: {id}, body}) {

  return Basket.findOneAndUpdate({_id: id}, {$set: data}, {new: true})
    .then(empty)
    .then(_.noop);
}

export function destroy ({params: {id}}) {
  return Basket.findOneAndRemove({_id: id})
    .then(empty)
    .then(_.noop);
}