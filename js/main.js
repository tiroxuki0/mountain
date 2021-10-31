
let scrollElement = document.querySelectorAll(".scroll a")
let section = document.querySelectorAll("section")

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY
        let height = sec.offsetHeight
        let position = sec.offsetTop - 300
        let id = sec.getAttribute("id")

        if(top >= position && top < position + height ){
            scrollElement.forEach(element => {
                element.classList.remove("active")
                document.querySelector(".scroll a[href*="+id+"]").classList.add("active")
            });
        }
    });

    if(window.scrollY > 40 ){
        document.querySelector(".header").classList.add("fixed")
    }else{
        document.querySelector(".header").classList.remove("fixed")
    }
}

document.querySelector(".fa-bars").onclick = () => {
    document.querySelector(".fa-bars").classList.toggle("fa-times")
    document.querySelector(".header-menu").classList.toggle("active")
}