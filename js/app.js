let notif = document.querySelector('audio')

let myMessages = [
    "Hi",
    "I'm fine."
]


let robotMessages = [
    "Hi, How are you ?",
    "Good"
]

$('input').on('input', ()=>{
    if($('input').val().length == 0) {
        $('#send').attr('disabled', 'disabled')
    } else {
        $('#send').removeAttr('disabled')
    }
})

$('#send').on('click', function() {
    let me = document.createElement('div');
    me.classList.add('me', 'd-flex', 'justify-content-end');

    let alertPrimary = document.createElement('div');
    alertPrimary.classList.add('alert', 'alert-secondary', 'w-75')
    alertPrimary.innerText = $('input').val()
    me.append(alertPrimary);
    $('#messages').append(me)
    

    for (let i = 0; i < myMessages.length; i++) {
        if(myMessages[i] === $('input').val()) {
            let robot = document.createElement('div');
            robot.classList.add('robot');
            let alertSuccess = document.createElement('div');
            alertSuccess.classList.add('alert', 'alert-success', 'w-75')
            alertSuccess.innerText = robotMessages[i]
            robot.append(alertSuccess);
            setTimeout(() => {
                $('#messages').append(robot)
                notif.play()
                $('#messages').scrollTop($('#messages')[0].scrollHeight);
            }, 2000)
        }
    }
    $('input').val("")
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
})


$('#close').click(()=>{
    $('.card-body, .card-footer').slideToggle();
    if($('#close').attr('class') == "btn btn-danger btn-sm") {
        $('#close').removeAttr('class', 'btn-danger')
        $('#close').attr('class', 'btn-success btn btn-sm')
        $('#close').children().attr('class', 'bi bi-chevron-up')
    } else{
        $('#close').removeAttr('class', 'btn-success ')
        $('#close').attr('class', 'btn btn-danger btn-sm')
        $('#close').children().attr('class', 'bi bi-x-circle-fill')
    }
})