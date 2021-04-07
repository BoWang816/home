import { defineConfig } from 'umi';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        {
            path: '/',
            component: '@/components/Content',
            routes: [
                { path: '/', exact: true, component: '@/pages/index', title: '首页' },
                { path: '/docs', exact: true, component: '@/pages/docs', title: '文档' },
                { path: '/tools', exact: true, component: '@/pages/tools', title: '工具' },
                { path: '/blogs', exact: true, component: '@/pages/blogs', title: '博客' },
                { path: '/interview', exact: true, component: '@/pages/interview', title: '面试' },
                { path: '/about', exact: true, component: '@/pages/about', title: '关于' },
                { component: '@/pages/404' },
            ],
        },
    ],
    fastRefresh: {},
});
