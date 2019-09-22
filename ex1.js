// add button will append the input txt

$('button').click(function(){
    if ($('#my-input22').val()!="") {
        const div = `<div id="doron55">${$('#my-input22').val()}</div>`
        $('body').append(div)
    }
})
