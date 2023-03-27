import { createApp } from 'vue'
// 从一个单文件组件中导入根组件
import App from './app.vue'
import 'ant-design-vue/dist/antd.css';

import { Input } from 'ant-design-vue';

const app = createApp(App)

app.use(Input);
app.mount('#app')

