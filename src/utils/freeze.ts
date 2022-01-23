export const freeze = (timeout = 1000) =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise(resolve => setTimeout(resolve, timeout));
