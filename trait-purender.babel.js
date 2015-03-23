import objectPath from 'object-path';

export const purender = ({raw}, ...values) => ({
  [Symbol.toStringTag]: 'purender',

  shouldComponentUpdate(...next) {
    const watchlist = String.raw({raw}, ...values).split(' ');

    return watchlist.reduce((m, n) => {
      const [props, state] = next,
            next = {props, state},
            [type, ...path] = n.split('.');

      return m || objectPath.get(this[type], path) !== objectPath.get(next[type], path);
    }, false);
  }
});
