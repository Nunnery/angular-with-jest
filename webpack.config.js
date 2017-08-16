const defaultEnv = {
  env: 'sit',
  brand: 'abcbs'
};

module.exports = function(env) {
  return require(`./conf/webpack.${process.env.NODE_ENV}`)(env || defaultEnv);
};
