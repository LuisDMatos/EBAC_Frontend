$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const adicaoDaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<li>${adicaoDaTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
    })

    $('ul').on('click','li',function(){
        $(this).css("text-decoration", "line-through");
    })
})