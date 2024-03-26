import path from 'path'

const here = path.resolve('.')
const root = path.resolve(here, '../../')
console.log(here)

export default {
  root,
  src: path.resolve(root, 'src'),
  log: path.resolve(root, 'log'),
}
