const mediaqueryList = window.matchMedia('(min-width: 992px)')

const accordions = document.querySelectorAll(".accordion")
const bgImage = document.querySelector('.bg-image')
const fgImage = document.querySelector('.fg-image')

mediaqueryList.addEventListener('change', () => {
    bgImage.setAttribute('src', './images/bg-pattern-desktop.svg')
    bgImage.setAttribute('width', '100%')
    fgImage.setAttribute('src', './images/illustration-woman-online-desktop.svg')
    fgImage.setAttribute('width', '100%')
})

if (mediaqueryList.matches) {
    bgImage.setAttribute('src', './images/bg-pattern-desktop.svg')
    bgImage.setAttribute('width', '100%')
    fgImage.setAttribute('src', './images/illustration-woman-online-desktop.svg')
    fgImage.setAttribute('width', '100%')
} else {
}
accordions.forEach((clickedaccordion) => {
    clickedaccordion.addEventListener('click', () => {
        const accordionValue = clickedaccordion.getAttribute('data-open')
        if (accordionValue === 'false') {
            clickedaccordion.setAttribute('data-open', 'true')
        } else {
            clickedaccordion.setAttribute('data-open', 'false')
        }
        accordions.forEach((accordion) => {
            if (accordion != clickedaccordion) {
                accordion.setAttribute('data-open', 'false')
            }
        })
    })
})

