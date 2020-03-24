import Vue from 'vue'
import 'resonance/dist/resonance.min.css'
import * as res from 'resonance'

Vue.config.ignoredElements = res.manifest.tags.all

document.addEventListener('DOMContentLoaded', () => {
  res.init({ publicPath: `https://resonance.vox-cdn.com/${res.version}/` })
})
