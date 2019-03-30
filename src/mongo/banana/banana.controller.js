import empty from 'http-reject-empty';
import _ from 'lodash';
import Banana from './banana.model';

export function index () {
  return Banana.find({});
}

export function show ({params: {id}}) {
  return Banana.findById(id)
    .then(empty);
}

export function create ({body}, res) {
  const data = _.pick(body, ['grade', 'number']);

  return Banana.create(data)
    .then(empty)
    .then(banana => {
      res.status(201);

      return banana;
    });
}

export function update ({params: {id}, body}) {
  const data = _.pick(body, ['grade', 'number']);

  return Banana.findOneAndUpdate({_id: id}, {$set: data}, {new: true})
    .then(empty)
    .then(_.noop);
}

export function destroy ({params: {id}}) {
  return Banana.findOneAndRemove({_id: id})
    .then(empty)
    .then(_.noop);
}