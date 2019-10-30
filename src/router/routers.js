// import Main from '@/views/default/main'
import parentView from '@/components/parent-view'
/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hide: (false) 设为true头部面包屑不会显示
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  isDetails: (false) 设置为true后在左侧菜单不会显示，但是在面包屑导航中显示，适用于新增、编辑...之类页面
 *  active: isDetails设置为true后设置该属性可以在新增、编辑页中，默认选中想选中的侧边栏name
 *  notCache: (false) 设为true后页面不会缓存
 *  toListName: (null) 如果有多个children 但是不在菜单显示，在父级添加该变量，变量的值为该路由下的列表的name
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标  使用的是阿里巴巴矢量图标库  https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2
 *  showAlways:当有三级菜单时设为true时只有一个三级菜单一样显示三级菜单内容
 *  btnArr: [] 该页面的按钮都有哪些
 *  isAlone: (false) 设为true后表示独立菜单，在角色分配菜单时不出现重复
 *  isLogin: (true) 设为true表示该页面不需要登录即可访问，不设置或者设置为false表示该页面需要登录才可以访问
 * }
 */

export default [
  {
    path: '/login',
    name: "login",
    meta: {
      title: '登录',
      hideInMenu: false,
      isLogin: true
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/layout/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hide: true,
      isAlone: true,
      title: '首页',
      access: ['100000'],
      notCache: true
    },
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '首页',
          icon: "icon-shouye",
          access: ['100000'],
          notCache: true,
          isAlone: true
        },
        component: () => import('@/views/layout/home/home.vue')
      }
    ]
  },
]
