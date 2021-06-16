// let div = document.querySelector('.box')
// div.addEventListener('dblclick', () =>{
//     div.style.background = 'pink'
// })

// $('.box').on('click', () => {
//     $('div').addClass('bg')
// })

// $('.box').on('click', () => {
//     $('div').removeClass('bg')
// })

// $('div').on('click', () => {
//     $('div').toggleClass('bg')
// })

// $('body').on('click', () => {
//     $('.bg').text('hasClass').hasClass('bg1')
// })

// $('div').hover(() =>{
//     alert('kirdim')
// },
// () =>{
//     alert('chiqdim')
// }
// )


$('.box').css({
    width: '5%',
    baackground: 'orange',
    color: 'white',
    position: 'fixed',
    right: 0,
    top: 0,
    'min-height': '100vh',
    border: '12px solid crismon' ,
    transition: '5s'
})

$('.box').hover(() => {
    $('.box').width('25%')
},
() => {
    $('.box').width('5%')
})
