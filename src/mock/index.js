import Mock from 'mockjs'
import config from '@/config'
import { logout, getUserInfo, login } from './mockData'

if (config.isMock) {
    // 登录相关和获取用户信息
    Mock.mock(/\/logout/, logout)
    Mock.mock(/\/userinfo/, getUserInfo)
    Mock.mock(/\/login/, login)
}

export default Mock