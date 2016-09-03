$(function() {
    $('#btn').click(sendForm);

});

function sendForm(e) {
    e.preventDefault()
    $.ajax({
        url: "https://formspree.io/rage.as.sage@gmail.com",
        method: "POST",
        data: {
            name: $("#name").val(),
            email: $('#email').val(),
            message: $('#msg').val()
        },
        dataType: "json",
        success: function() {
            $('#thanks').html('thanks,for contacting')
        }
    });
}