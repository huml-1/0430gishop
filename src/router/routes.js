import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
export default[
    {
        path:'/',
        component:Home
        
    },
    {
        path:'/register',
        component:Register,
        meta: {
            isHideFooter: true
        }
        
    },
    {
        path:'/login',
        component:Login,
        meta: {
            isHideFooter: true
        }
        
    },
    {
        name:'search',
        path:'/search/:keyword?',
        component:Search,
        // props:true
        props:(route)=>({
            keyword3:route.params.keyword,
            keyword4:route.query.keyword2,
        })
        
    },
]