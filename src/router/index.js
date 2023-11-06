import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/layout/TheHome.vue'
import TheError from '../components/layout/TheError.vue'

// fashion
// import MenFashion from '../components/pages/fashion/MenFashion.vue'
// import WomenFashion from '../components/pages/fashion/WomenFashion.vue'
// import MotherFashion from '../components/pages/fashion/MotherFashion.vue'
// import SeasonFashion from '../components/pages/fashion/SeasonFashion.vue'

// tools-for-home
// import ToolsForKitchen from '../components/pages/tools-for-home/ToolsForKitchen.vue'
// import ToolsForCleanHome from '../components/pages/tools-for-home/ToolsForCleanHome.vue'
// import TheDecoration from '../components/pages/tools-for-home/TheDecoration.vue'

// tools-for-study
// import ModelAssembly from '../components/pages/tools-for-study/ModelAssembly.vue'
// import SmallComputer from '../components/pages/tools-for-study/SmallComputer.vue'
// import ToolsForChildren from '../components/pages/tools-for-study/ToolsForChildren.vue'
// import ToolsForStudy from '../components/pages/tools-for-study/ToolsForStudy.vue'

// smart-device
// import AntiShortDevice from '../components/pages/smart-device/Anti-ShortDevice.vue'
// import FireWarningDevice from '../components/pages/smart-device/FireWarningDevice.vue'
// import SmartWatch from '../components/pages/smart-device/SmartWatch.vue'
// import TheCamera from '../components/pages/smart-device/TheCamera.vue'
// import TheIpad from '../components/pages/smart-device/TheIpad.vue'
// import TheLaptop from '../components/pages/smart-device/TheLaptop.vue'
// import TheTV from '../components/pages/smart-device/TheTV.vue'

// online-book
// import OnlineStoreBook from '../components/pages/online-book/OnlineStoreBook.vue'

// about-app
import TheAbout from '../components/layout/TheAbout.vue'

// signin-signup
import SignInSignUp from '../components/layout/SignIn-SignUp.vue'

// detail category
import CategoryDetail from '../components/pages/CategoryDetail.vue'

// detail product
import DetailProduct from '../components/pages/DetailProduct.vue'




const routes = [
    // Home
    {path: '/', component: Home},

    // fashion
    // {path: '/fashion/MenFashion', component: MenFashion},
    // {path: '/fashion/WomenFashion', component: WomenFashion},
    // {path: '/fashion/MotherFashion', component: MotherFashion},
    // {path: '/fashion/SeasonFashion', component: SeasonFashion},

    // tools-for-home
    // {path: '/tools-for-home/TheDecoration', component: TheDecoration},
    // {path: '/tools-for-home/ToolsForCleanHome', component: ToolsForCleanHome},
    // {path: '/tools-for-home/ToolsForKitchen', component: ToolsForKitchen},

    // tools-for-study
    // {path: '/tools-for-study/ModelAssembly', component: ModelAssembly},
    // {path: '/tools-for-study/SmallComputer', component: SmallComputer},
    // {path: '/tools-for-study/ToolsForChildren', component: ToolsForChildren},
    // {path: '/tools-for-study/ToolsForStudy', component: ToolsForStudy},

    // smart-device
    // {path: '/smart-device/AntiShortDevice', component: AntiShortDevice},
    // {path: '/smart-device/FireWarningDevice', component: FireWarningDevice},
    // {path: '/smart-device/SmartWatch', component: SmartWatch},
    // {path: '/smart-device/TheIpad', component: TheIpad},
    // {path: '/smart-device/TheLaptop', component: TheLaptop},
    // {path: '/smart-device/TheCamera', component: TheCamera},
    // {path: '/smart-device/TheTV', component: TheTV},

    // online-book
    // {path: '/online-book/OnlineStoreBook', component: OnlineStoreBook},

    // detail-product
    {path: '/DetailProduct', component: DetailProduct},

    // about-app
    {path: '/TheAbout', component: TheAbout},

    // signin-signUp
    {path: '/SignIn-SignUp', component: SignInSignUp},

    // categorydetail
    {path: '/CategoryDetail', component: CategoryDetail},

    {path: '/:pathMatch(.*)*', component: TheError},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router