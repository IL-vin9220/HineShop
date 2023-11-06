<template>
    <div class="headerContainer">
        <div class="search-in-HineShop">
            <div class="search-text">
                <input type="text" name="input-search" @click="ClickInput" placeholder="Tìm kiếm sản phẩm" class="input-search" id="input-search">
                <div class="icon"><i class="fi fi-rr-search"></i></div>
            </div>
        </div>

        <div class="aboutShop">
            <div class="phone-number">
                <p class="text">1900 1688</p>
                <div class="icon"><i class="fi-ts-phone-call"></i></div>
            </div>
            <div class="login">
                <router-link to="/SignIn-SignUp" class="sublogin">
                    <p class="text">Đăng nhập</p>
                    <div class="icon"><i class="fi fi-ts-circle-user"></i></div>
                </router-link>
            </div>
            <div class="help">
                <router-link to="" class="subabout">
                    <p class="text">Trợ giúp</p>
                    <div class="icon"><i class="fi fi-rr-info"></i></div>
                </router-link>
            </div>
        </div>
        <!-- <the-menu></the-menu> -->
    </div>
</template>

<script>
    
    // import TheMenu from './TheMenu.vue'

    export default{
        name: 'TheHeader',
        // components:{
        //     TheMenu
        // }
    }
</script>


<style scoped>
    @import url(../../css/layout/header.css);
</style>

