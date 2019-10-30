// import { getParams } from '@/libs/util'
// import { Base64 } from 'js-base64'
const USER_MAP = {
    super_admin: {
        name: 'super_admin',
        userId: '1',
        access: [
            '100000', '101000',
            '10000000', '10001000', '10001010', '10001020', '10001030', '10001040', '10002000', '10002010', '10002020', '10002030', '10002040',
            '11000000', '11001000', '11001010', '11001020', '11001040',
            '12000000', '12001010', '12001020', '12001040'
        ],
        token: 'super_admin',
        avator: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png',
        account: 'admin'
    },
    admin: {
        name: 'admin',
        userId: '2',
        access: ['100000', '101000'],
        token: 'admin',
        avator: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4',
        account: 'admin'
    }
}

export const login = req => {
    // const reqBody = Base64.decode(req.body)
    // const params = JSON.parse(reqBody)
    const token = USER_MAP['super_admin'].token
    const body = { code: 200, msg: '获取成功', data: { token: token } }
    return body
}

export const getUserInfo = req => {
    const MAP = USER_MAP['super_admin']
    // const params = getParams(req.url)
    // const MAP = USER_MAP[params.token]
    const body = { code: 200, msg: '获取成功', data: MAP }
    return body
}

export const logout = req => {
    const body = { code: 200, msg: '获取成功', data: null }
    return body
}

export const getTableData = req => {
    let data = [
        {
            'name': '张三',
            'email': '邮箱',
            'createTime': '时间',
            'handle': '456'
        },
        {
            'name': '李四',
            'email': '邮箱',
            'createTime': '时间',
            'handle': '789'
        }
    ]
    const body = { code: 200, msg: '获取成功', data: data }
    return body
}
