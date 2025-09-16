import DefaultTheme from 'vitepress/theme'
import StarLinkCard from './components/StarLinkCard.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('StarLinkCard', StarLinkCard)
  }
}