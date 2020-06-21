$(function () {
    $('#link-reg').on('click', function () {
        $('.reg-box').show()
        $('.login-box').hide()
    })
    $('#link-login').on('click', function () {
        $('.reg-box').hide()
        $('.login-box').show()
    })
    var form = layui.form
    form.verify({
        pwd: [/^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'],
        repwd: function (value) {
            var pwd = $('#reg-password').val()
            if (pwd !== value) {
                return '小老弟，你这俩密码不太对得上啊'
            }
        }
    })
    $('#form_reg').on('submit', function (e) {
        e.preventDefault()
        var data = {
            username: $('#form-reg[name=username]'),
            password: $('#form-reg[name=password]'),
        }
        $.post('url', data, function (res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            layer.msg('注册成功，请登录！')
            $('#link-login').click()
        })
    })
    $('#form-login').on('click', function (e) {
        e.preventDefault()
        $.ajax({
            url: 'asd',
            method: 'POST',
            data: $(this).serialize(),
            success: function () {
                if (res.status !== 0) {
                    return layer.msg('登录失败！')
                }
                layer.msg('登录成功！')
                localStorage.setItem('token', res.token)
                location.href = './index.html'
            }
        })
    })
})
