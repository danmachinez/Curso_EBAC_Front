$(document).ready(function() {

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const inputTarefa = $('#tarefa').val();
        const tarefaNova = $(`<li id="item-lista">${inputTarefa}</li>`);

        $(tarefaNova).appendTo('ul');
        $(tarefaNova).fadeIn(2000);
        $('#tarefa').val('');
        
        $('#item-lista').click(function(){
            $('li').addClass('marcado');
        })
    })
    })
