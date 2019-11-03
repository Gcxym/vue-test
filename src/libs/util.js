import Cookies from 'js-cookie' // cookie保存的天数
import config from '@/config'
// import { forEach, hasOneOf, objEqual } from '@/libs/tools'

export const TOKEN_KEY = config.tokenName || 'token'

export const setToken = (token) => { //设置token
    Cookies.set(TOKEN_KEY, token, { expires: config.cookieExpires || 1 })
}

export const getToken = () => { //获取token
    const token = Cookies.get(TOKEN_KEY)
    if (token) return token
    else return false
}

/**
 * 判断值是否为Array类型
 */
export const isArray = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Array]'
}

/**
 * @param {*} access 用户权限数组，如 ['super_admin', 'admin']
 * @param {*} route 路由列表
 */
const hasAccess = (access, route) => {
    if (route.meta && route.meta.access) return hasOneOf(access, route.meta.access)
    else return true
}


/**
 * 权鉴
 * @param {*} name 即将跳转的路由name
 * @param {*} access 用户权限数组
 * @param {*} routes 路由列表
 * @description 用户是否可跳转到该页
 */
export const canTurnTo = (name, access, routes) => {
    const routePermissionJudge = (list) => {
        return list.some(item => {
            if (item.children && item.children.length) {
                return routePermissionJudge(item.children)
            } else if (item.name === name) {
                return hasAccess(access, item)
            }
        })
    }

    return routePermissionJudge(routes)
}

