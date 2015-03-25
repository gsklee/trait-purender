import Immutable from 'immutable';
import value from 'object-path';

export const purender = ({raw}, ...values) => ({
  [Symbol.toStringTag]: 'purender',

  shouldComponentUpdate(...args) {
    const watchlist = String.raw({raw}, ...values).split(/\s+/);

    return watchlist.reduce((m, n) => {
      const [props, state] = args,
            next = {props, state},
            [type, ...path] = n.split('.');

      return m || !Immutable.is(value.get(this[type], path), value.get(next[type], path));
    }, false);
  }
});
