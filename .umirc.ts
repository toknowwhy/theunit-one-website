import { defineConfig } from 'umi';
import { resolve } from 'path';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  alias: {
    components: resolve(__dirname, './src/components'),
    layouts: resolve(__dirname, './src/layouts'),
    themes: resolve(__dirname, './src/themes'),
  },
  locale: {
    default: 'en-US',
    antd: true,
    baseNavigator: true,
  },
  theme: {
    'primary-color': '#5956FF',
    'font-family': 'Avenir',
    'font-size-base': '16px',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/MainLayout',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/about', component: '@/pages/About' },
        { path: '/faq', component: '@/pages/FAQ' },
        { path: '/jobs', component: '@/pages/Jobs' },
      ],
    },
  ],
  fastRefresh: {},
});
