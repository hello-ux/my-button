import Vue from 'vue'
import MyButton from './src/components/myButton.vue'
const components = [MyButton]
const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}
export default {
    install
}