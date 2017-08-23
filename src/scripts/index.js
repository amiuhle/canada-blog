import '../styles/main.scss'

import connect from 'webpack-react-compiler-plugin/runtime'

export { default } from './pages/home'
export { default as posts } from './pages/posts'
export * from './pages/posts'
export { default as about } from './pages/about'

connect(exports)
