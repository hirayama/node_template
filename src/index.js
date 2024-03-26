import env from './system/env.js'
import getLogger from './system/logger.js'

const logger = getLogger()

logger.info('env.name:', env.name)
