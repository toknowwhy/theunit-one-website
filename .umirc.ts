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
  routes: [
    {
      path: '/',
      component: '@/layouts/MainLayout',
      routes: [{ path: '/', component: '@/pages/index' }],
    },
  ],
  fastRefresh: {},
});
