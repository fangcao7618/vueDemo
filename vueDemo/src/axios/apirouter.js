// 后台接口配制
const _key = process.env.NODE_ENV === 'development' ? 'development' : 'production';
const apiType = process.env.NODE_ENV === 'development' ? 'get' : 'post';

const apiConfig = {
    development: {
        GET_LOGIN:'../../static/mock/user.json',
        GET_REGISTER:'/api/register',
        GET_USER:'../../static/mock/userList.json',
        DEL_USER:'/api/delUser',
    },
    stg: {
        GET_LOGIN:'/api/login',
        GET_REGISTER:'/api/register',
        GET_USER:'/api/user',
        DEL_USER:'/api/delUser',
    },
    production: {
        GET_LOGIN:'/api/login',
        GET_REGISTER:'/api/register',
        GET_USER:'/api/user',
        DEL_USER:'/api/delUser',
    }
};
export default {
    _apiConfig:apiConfig[_key],
    _apiType:apiType,
};