import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './style.css'

try {
    const stored = localStorage.getItem('theme');

    if (stored) {
        document.documentElement.classList.toggle(
            'dark',
            stored === 'dark'
        );
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
} catch (e) {
    document.documentElement.classList.add('dark');
}

createApp(App).use(router).use(i18n).mount('#app')