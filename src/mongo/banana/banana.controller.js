import empty from 'http-reject-empty';
import _ from 'lodash';
import Basket from './basket.model';

export function index () {
  return Basket.find({});
}

export function show ({params: {id}}) {
  return Basket.findById(id)
    .then(empty);
}

export function create ({body}, res) {
  const data = _.pick(body, ['grade', 'number']);

  return Basket.create(data)
    .then(empty)
    .then(basket => {
      res.status(201);

      return basket;
    });
}

export function update ({params: {id}, body}) {
  const data = _.pick(body, ['grade', 'number']);

  return Basket.findOneAndUpdate({_id: id}, {$set: data}, {new: true})
    .then(empty)
    .then(_.noop);
}

export function destroy ({params: {id}}) {
  return Basket.findOneAndRemove({_id: id})
    .then(empty)
    .then(_.noop);
}