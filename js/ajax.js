$('#ajax-form').submit(function(){
    $.post(
        '../action-ajax-form.php', // адрес обработчика
         $("#ajax-form").serialize(), // отправляемые данные          
        
        function(msg) { // получен ответ сервера  
            $('#ajax-form').hide('slow');
            $('#result-form').html(msg);
        }
    );
    return false;
});