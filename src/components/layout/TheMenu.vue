<template>
    <div class="all-menu">
        <div class="wrap">
            <div class="toolbar-left">
                <div class="logo"><router-link to="/">HINESHOP</router-link></div>
                <ul class="menu">
                    <li><router-link to="/">Trang Chủ</router-link></li>
                    <li>Thời trang
                        <ul class="sub-menu">
                            <router-link to="/CategoryDetail" class="child" @click="idCategory = '11'; changeCategoryName(idCategory)" v-bind:CategoryNameProp="CategoryName"><li>Thời Trang Nam</li></router-link>  
                            <router-link to="/CategoryDetail" class="child" @click="idCategory = '12'; changeCategoryName(idCategory)"><li>Thời Trang Nữ</li></router-link> 
                            <router-link to="/CategoryDetail" class="child" @click="idCategory = '13'; changeCategoryName(idCategory)"><li>Thời Trang Theo mùa</li></router-link>  
                            <router-link to="/CategoryDetail" class="child" @click="idCategory = '14'; changeCategoryName(idCategory)"><li>Thời Trang Mẹ Bầu</li></router-link>    
                        </ul>
                    </li>
                    <li>Đồ gia dụng
                        <ul class="sub-menu">
                            <router-link to="/CategoryDetail" class="child" @click="idCategory = '21'; changeCategoryName(idCategory)"><li>Dụng Cụ Nhà Bếp</li></router-link>
                            <router-link to="/CategoryDetail" class="child" @click="idCategory = '22'; changeCategoryName(idCategory)"><li>Dụng Cụ Vệ Sinh Nhà</li></router-link>
                            <router-link to="/CategoryDetail" class="child" @click="idCategory = '23'; changeCategoryName(idCategory)"><li>Đồ Trang Trí</li></router-link>
                        </ul>
                    </li>
                    <li>Dụng cụ học tập
                        <ul class="sub-menu">
                            <router-link to="/CategoryDetail" class="child" @click="idCategory = '31'; changeCategoryName(idCategory)"><li>Dụng Cụ Học Tập</li></router-link>
                            <router-link to="/CategoryDetail" class="child" @click="idCategory = '32'; changeCategoryName(idCategory)"><li>Mô Hình Lắp Ghép</li></router-link>
                            <router-link to="/CategoryDetail" class="child" @click="idCategory = '33'; changeCategoryName(idCategory)"><li>Bàn Tính Cho Trẻ</li></router-link>
                            <router-link to="/CategoryDetail" class="child" @click="idCategory = '34'; changeCategoryName(idCategory)"><li>Máy Tính Bỏ Túi</li></router-link>
                        </ul>
                    </li>
                    <li>Thiết bị thông minh
                        <ul class="sub-menu">
                            <router-link to="/CategoryDetail" class="child" @click="idCategory = '41'; changeCategoryName(idCategory)"><li>Đồng Hồ Thông Minh</li></router-link>
                            <router-link to="/CategoryDetail" class="child" @click="idCategory = '42'; changeCategoryName(idCategory)"><li>Máy Tính Bảng</li></router-link>
                            <router-link to="/CategoryDetail" class="child" @click="idCategory = '43'; changeCategoryName(idCategory)"><li>Thiết Bị Chống Chập</li></router-link>
                            <router-link to="/CategoryDetail" class="child" @click="idCategory = '44'; changeCategoryName(idCategory)"><li>Thiết Bị Cảnh Báo Cháy Nổ</li></router-link>
                            <router-link to="/CategoryDetail" class="child" @click="idCategory = '45'; changeCategoryName(idCategory)"><li>Laptop</li></router-link>
                            <router-link to="/CategoryDetail" class="child" @click="idCategory = '46'; changeCategoryName(idCategory)"><li>Camera</li></router-link>
                            <router-link to="/CategoryDetail" class="child" @click="idCategory = '47'; changeCategoryName(idCategory)"><li>TV</li></router-link>
                        </ul>
                    </li>
                    <li><router-link to="/CategoryDetail" class="child" @click="idCategory = '51'; changeCategoryName(idCategory)">Nhà Sách Online</router-link></li>
                </ul>
            </div>
            <div class="toolbar-right">
                <div class="follow">
                    <div class="icon"><i class="fi fi-ts-follow-folder"></i></div>
                </div>
                <div class="cart">
                    <div class="icon"><i class="fi fi-rr-shopping-cart"></i></div>
                    <div class="count"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'TheMenu',
        data() {
            return{
                CategoryName: "", // tên danh mục
            };
        },
        // props:["idCategory"],
        methods:{
            changeCategoryName(idCategory){
                if(idCategory == '11')          this.CategoryName = "Thời Trang Nam";
                else if(idCategory == '12')     this.CategoryName = "Thời Trang Nữ";
                else if(idCategory == '13')     this.CategoryName = "Thời Trang Theo Mùa";
                else if(idCategory == '14')     this.CategoryName = "Thời Trang Mẹ Bầu";
                else if(idCategory == '21')     this.CategoryName = "Dụng Cụ Nhà Bếp";
                else if(idCategory == '22')     this.CategoryName = "Dụng Cụ Vệ Sinh Nhà";
                else if(idCategory == '23')     this.CategoryName = "Đồ Trang Trí";
                else if(idCategory == '31')     this.CategoryName = "Dụng Cụ Học Tập";
                else if(idCategory == '32')     this.CategoryName = "Mô Hình Lắp Ghép";
                else if(idCategory == '33')     this.CategoryName = "Bàn Tính Cho Trẻ";
                else if(idCategory == '34')     this.CategoryName = "Máy Tính Bỏ Túi";
                else if(idCategory == '41')     this.CategoryName = "Đồng Hồ Thông Minh";
                else if(idCategory == '42')     this.CategoryName = "Máy Tính Bảng";
                else if(idCategory == '43')     this.CategoryName = "Thiết Bị Chống Chập";
                else if(idCategory == '44')     this.CategoryName = "Thiết Bị Cảnh Báo Cháy Nổ";
                else if(idCategory == '45')     this.CategoryName = "Laptop";
                else if(idCategory == '46')     this.CategoryName = "Camera";
                else if(idCategory == '47')     this.CategoryName = "TV";
                else                            this.CategoryName = "Nhà Sách Online";
                return this.CategoryName;
            }
        },
    }
</script>

<style scoped>
@import url(../../css/layout/menu.css);
</style>A