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
        console.log('ok')
        if ($('#reg-password').val() !== $('#reg-repassword').val()) {
            return alert('小老弟，你这俩密码不太对啊')
        }
    })
    var form = layui.form
    form.verify({
        pwd: [/^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格']
    })
})                                   