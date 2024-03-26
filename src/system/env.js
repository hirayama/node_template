const NAME = {
  test: 'test',
  local: 'local',
  dev: 'dev',
  prod: 'prod',
}

const ENV = NAME[process.env.ENV] ? NAME[process.env.ENV] : NAME.local

export default {
  name: ENV,
  isTest: () => ENV === NAME.test,
  isLocal: () => ENV === NAME.local,
  isDev: () => ENV === NAME.dev,
  isProd: () => ENV === NAME.prod,
}
