$(document).ready(function() {
    $('#password').on('keyup', function(e) {
        if (e.keyCode === 13) {
            $('.loginBtn').click();
        }
    });
    $('.loginBtn').click(function() {
        var username = $('#username').val();
        var password = $('#password').val();
        console.log(username, password)
        if (username == '' || password == '') {
            alert('Please fill all fields...!!!!!!');
        } else {
            $.ajax({
                url: '/api/v1/auth/authenticate',
                type: 'POST',
                data: JSON.stringify({
                    username,
                    password
                }),
                contentType: 'application/json',
                success: function(route) {
                    console.log(route)
                  window.location.href = route;
                },
                error: function(xhr, textStatus, errorThrown) {
                    console.log(xhr)
                    console.log(textStatus)
                    console.log(errorThrown)
                    alert('Your username or password is incorrect...!!!!!!');
                },

            })
        }
    });
})