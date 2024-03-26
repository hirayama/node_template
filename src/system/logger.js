import pino from 'pino'
import mypath from './mypath.js'
import env from './env.js'

// 標準出力にログを出力するハンドラ
const streamHandler = {
  name: 'stream',
  level: process.env.LOG_LEVEL || 'info',
  stream: process.stdout,
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
}

// ファイルにログを出力するハンドラ
/* eslint no-unused-vars: off */
const fileHandler = {
  name: 'file',
  level: process.env.LOG_LEVEL || 'debug',
  stream: pino.destination(`${mypath.log}/app.log`),
}

export default function getLogger() {
  // 環境ごとに適切なハンドラを設定
  if (env.isLocal()) {
    return pino(pino.multistream([streamHandler]))
  }
  return pino(pino.multistream([streamHandler]))
}
