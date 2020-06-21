$(function () {
    $('#link-reg').on('click', function () {
        $('.reg-box').show()
        $('.login-box').hide()
    })
    $('#link-login').on('click', function () {
        $('.reg-box').hide()
        $('.login-box').show()
    })
    $('#btn-reg').on('click', function (e) {

        if ($('#reg-password').val() !== $('#reg-repassword').val()) {
            return alert('小老弟，你这俩密码不太对啊')
        }
    })
})                                   