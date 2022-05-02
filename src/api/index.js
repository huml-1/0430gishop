// 包含应用的所有借口的接口请求函数
import ajax from '@/api/ajax'
export function reqCategoryList(){
    return ajax({
        url:'/product/getBaseCategoryList',
    })
}