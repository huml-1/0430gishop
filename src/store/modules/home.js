import {reqCategoryList,reqBannerList,reqRecommends} from '@/api/index'
const state={
    categoryList:[],
    bannerList:[],
    recommendsList:[]
}
const mutations={
    RECEIVE_CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList.splice(0,15)
    },
    RECEIVE_BANNERLIST(state,bannerList){
        state.bannerList=bannerList
    },
    RECEIVE_RECOMMENDS(state,recommendsList){
        state.recommendsList=recommendsList
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
    },
    async getBannerList({commit}){
        const result=await reqBannerList()
        const bannerList=result.data
        if(result.code===200){
            commit('RECEIVE_BANNERLIST',bannerList)
        }
    },
    async getRecommendsList({commit}){
        const result=await reqRecommends()
        const recommendsList=result.data
        if(result.code===200){
            commit('RECEIVE_RECOMMENDS',recommendsList)
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