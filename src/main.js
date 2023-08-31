import DisableDevtool from 'disable-devtool';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import './assets/custom.css'
import './assets/app.css'
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './Dashboard.vue';
import Home from './Home.vue';
// Disable right-click
// document.addEventListener('contextmenu', (e) => e.preventDefault());

// function ctrlShiftKey(e, keyCode) {
//   return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
// }

// document.onkeydown = (e) => {
//   // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
//   if (
//     event.keyCode === 123 ||
//     ctrlShiftKey(e, 'I') ||
//     ctrlShiftKey(e, 'J') ||
//     ctrlShiftKey(e, 'C') ||
//     (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
//   )
//     return false;
// };


// DisableDevtool({
//   ondevtoolopen(type, next) {
//   //  alert(type)
//   },
// });

import { createApp } from 'vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: Home },
      { path: '/earn/fixed-yield', component: Dashboard, name: 'dashboard' },
    ],
  })

const app = createApp(App);
app.use(Toast);
app.use(router)
app.mount('#app');
