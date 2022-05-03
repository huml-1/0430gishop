// 包含应用的所有借口的接口请求函数
import ajax from '@/api/ajax'
import mockAjax from '@/api/mockAjax'
export function reqCategoryList(){
    return ajax({
        url:'/product/getBaseCategoryList',
    })
}

export const reqBannerList=()=>ajax('/cms/banner')
export const reqRecommends=()=>mockAjax('/recommends')
export const reqFloors=()=>mockAjax('/floors')
