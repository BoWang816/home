import { defineConfig } from 'umi';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        {
            path: '/',
            exact: true,
            component: '@/components/Content',
            routes: [
                { path: '/', component: '@/pages/index', title: '首页' },
                { path: '/docs', component: '@/pages/docs', title: '文档' },
                { path: '/tools', component: '@/pages/tools', title: '工具' },
                { path: '/blogs', component: '@/pages/blogs', title: '博客' },
                { path: '/interview', component: '@/pages/interview', title: '面试' },
                { path: '/about', component: '@/pages/about', title: '关于' },
            ],
        },
        { component: '@/pages/404' },
    ],
    fastRefresh: {},
});
