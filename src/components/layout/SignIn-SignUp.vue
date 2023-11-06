<template>
    <div class="SignIn-SignUp-container">
        <div class="SignIn-wrap">
            <div class="SignIn-detail">
                <div class="header-ss">Đăng Nhập</div>
                <div class="field-ss">
                    <div class="username wrap-fieldtext">
                        <p class="name">Tên tài khoản:</p>
                        <div class="input-bar">
                            <div class="input">
                                <input type="text" name="input-username" class="input-text" id="input-text">
                                <div class="icon"></div>
                            </div>
                        </div>
                    </div>
                    <div class="password wrap-fieldtext">
                        <p class="name">Mật khẩu:</p>
                        <div class="input-bar">
                            <div class="input">
                                <input type="password" name="input-password" class="input-text" id="input-text">
                                <div class="icon"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-ss">
                    <div class="more-infor-signin">
                        <div class="forget-pass">----- Quên Mật khẩu -----</div>
                        <div class="transfrom-to-signup">
                            <button class="btn-transform-signup-form" type="button">Đăng kí</button>
                        </div>
                    </div>
                    <!-- đăng nhập bằng cách khác -->
                    <div class="gmail-signin">
                        <div class="icon"></div>
                        <div class="title-signin">Đăng Nhập Với Gmail</div>
                    </div>
                    <div class="facebook-signin">
                        <div class="icon"></div>
                        <div class="title-signin">Đăng Nhập Với Facebook</div>
                    </div>

                    <!-- button đăng nhập -->
                    <button type="button" class="btn btn-signin">Đăng Nhập</button>
                </div>
            </div>
            <div class="decoration-ss">
                <div class="decoration-text">
                    <p>Chúc bạn một ngày vui vẻ, ghé shop mua nhiều đồ nhé</p>
                </div>
                <div class="img-decoration"></div>
            </div>
        </div>
        <div class="SignUp-wrap">
            <div class="decoration-ss">
                <div class="decoration-text">
                    <p>Chúc bạn một ngày vui vẻ, ghé shop mua nhiều đồ nhé</p>
                </div>
                <div class="img-decoration"></div>
            </div>
            <div class="SignUp-detail">
                <div class="header-ss">Đăng Kí</div>
                <div class="field-ss">
                    <div class="username wrap-fieldtext">
                        <p class="name">Tên tài khoản:</p>
                        <div class="input-bar">
                            <div class="input">
                                <input type="text" name="input-username" class="input-text" id="input-text">
                                <div class="icon"></div>
                            </div>
                        </div>
                    </div>
                    <div class="password wrap-fieldtext">
                        <p class="name">Mật khẩu:</p>
                        <div class="input-bar">
                            <div class="input">
                                <input type="password" name="input-password" class="input-text" id="input-text">
                                <div class="icon"></div>
                            </div>
                        </div>
                    </div>
                    <div class="gmail-link wrap-fieldtext">
                        <p class="name">Email:</p>
                        <div class="input-bar">
                            <div class="input">
                                <input type="email" name="input-gmail" class="input-text" id="input-text">
                                <div class="icon"></div>
                            </div>
                        </div>
                    </div>
                    <div class="phonenumber wrap-fieldtext">
                        <p class="name">Số điện thoại:</p>
                        <div class="input-bar">
                            <div class="input">
                                <input type="text" name="input-phonenumber" class="input-text" id="input-text">
                                <div class="icon"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-ss">
                    <div class="transfrom-to-signin">
                        <p>Bạn đã có tài khoản !</p>
                        <button class="btn-transfrom-signin-form">Đăng Nhập</button>
                    </div>
                    <button class="btn btn-signup">Đăng Kí</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignIn-SignUp'
}
</script>

<style>
@import url('../../css/layout/signin-signup.css');
</style>