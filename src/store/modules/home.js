import {reqCategoryList} from '@/api/index'
const state={
    categoryList:[]
}
const mutations={
    RECEIVE_CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList.splice(0,15)
    }

}
const actions={
    async getCaetgoryList({commit}){
        // 调用接口请求函数发请求
        // 请求成功取出数据提交给mutation保存
        const result=await reqCategoryList()
        if(result.code===200){
            const categoryList=result.data
            commit('RECEIVE_CATEGORYLIST',categoryList)
        }
    }
}
const getters={
    
}

export default{
    state,
    mutations,
    actions,
    getters
}