
let scrollElement = document.querySelectorAll(".scroll a")
let section = document.querySelectorAll("section")

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY
        let height = sec.offsetHeight
        let position = sec.offsetTop - 600
        let id = sec.getAttribute("id")

        if(top >= position && top < position + height ){
            scrollElement.forEach(element => {
                element.classList.remove("active")
                document.querySelector(".scroll a[href*="+id+"]").classList.add("active")
            });
        }
    });
}