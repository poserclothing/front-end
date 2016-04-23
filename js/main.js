function draw(two) {
    two.clear()
    var star
    for (i = 0; i < 350; i++) {
        var randX = Math.round(Math.random() * window.innerWidth)
        var randY = Math.round(Math.random() * window.innerHeight)
        star = two.makeCircle(randX, randY, Math.random() * 3)
        star.fill = 'rgba(64, 64, 64,' + (Math.random() * (1 - .5) + .5) + ')'
        star.noStroke()
    }
    two.update()
}
window.onload = function () {
    var elem = document.getElementById('canvas'),
        logo = document.getElementById('logo'),
        nav = document.getElementsByTagName('nav')[0],
        content = document.getElementById('content')

    document.querySelector('.banner').height = window.innerHeight * .4 + "px"

    content.style.top = window.innerHeight + nav.getClientRects()[0].height + "px"

    elem.style.height = window.innerHeight + "px"
    elem.style.width = window.innerWidth + "px"

    var two = new Two({
        width: window.innerWidth,
        height: window.innerHeight
    }).appendTo(elem)


    logo.style.top = ((window.innerHeight / 2) - (logo.getClientRects()[0].height / 2)) + "px"
    logo.style.left = (window.innerWidth / 2) - (logo.getClientRects()[0].width / 2) + "px"

    window.setTimeout(function () {
        logo.style.visibility = 'visible'
        logo.style.animation = 'fade-in .1s ease-in'
    }, 350)


    draw(two)

    window.addEventListener('resize', function () {

        elem.style.height = window.innerHeight + "px"
        elem.style.width = window.innerWidth + "px"
        logo.style.top = (window.innerHeight / 2) - (logo.getClientRects()[0].height / 2) + "px"
        logo.style.left = (window.innerWidth / 2) - (logo.getClientRects()[0].width / 2) + "px"

        draw(two)
    }, false)


    window.addEventListener('scroll', function (e) {
        //                e.preventDefault()
        if (window.scrollY > (window.innerHeight - window.scrollY) && nav.style.position != 'fixed') {
            nav.style.position = 'fixed'
            document.getElementById('spacer').style.height = nav.clientHeight + "px"
        }
        if (window.scrollY < (window.innerHeight - window.scrollY) && nav.style.position == 'fixed') {
            nav.style.position = 'initial'
            document.getElementById('spacer').style.height = "0px"
        }

        if (window.innerHeight > window.scrollY) {
            content.style.top = (window.innerHeight - window.scrollY) + "px"
        }
    })
}

function toggleNav() {
    var button = document.getElementById('expand'),
        nav = document.querySelector('#content ul')

    if (nav.style.display == 'inherit') {
        button.style.transform = 'rotateX(360deg)'
        nav.style.animation = 'close-nav .45s, fade-out .6s'
        nav.style.height = '0px'
        window.setTimeout(function () {
            nav.style.display = 'none'
        }, 400)
    } else {
        button.style.transform = 'rotateX(180deg)'
        nav.style.display = 'inherit'
        nav.style.animation = 'fade-in .6s, expand-nav .45s'
        window.setTimeout(function () {
            nav.style.height = 'auto'
        }, 400)
    }
}