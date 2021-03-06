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
  antd: {
    dark: true,
  },
  title: 'The Unit',
  theme: {
    'primary-color': '#5956FF',
    'body-background': '#000',
    'font-family': 'Avenir',
    'font-size-base': '18px',
    'text-color': '#F5F5FF',
  },
  favicon: '/logo.png',
  routes: [
    {
      path: '/',
      component: '@/layouts/MainLayout',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/about', component: '@/pages/About' },
        { path: '/faq', component: '@/pages/FAQ' },
        { path: '/jobs', component: '@/pages/Jobs' },
        { path: '/jobs/:id', component: '@/pages/Job' },
        { path: '/road-map', component: '@/pages/Timeline' },
        { path: '/branding', component: '@/pages/Branding' },
      ],
    },
  ],
  fastRefresh: {},
});
