import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import '@/assets/main.scss'

const pinia = createPinia()
pinia.use(persist)

export default pinia

export * from './modules/user'
