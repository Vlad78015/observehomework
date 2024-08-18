let images = document.querySelectorAll('.block-img')
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            let img = entry.target
            img.src = img.dataset.src //зміна src на data-src
            img.onload = () => {
                img.classList.remove('loading') //після завершення загрузки зображення видаляємо клас
                img.style.opacity = 1 //показуємо саме зображення
            }
            observer.unobserve(img) //після загрузки unobserve
        }
    })
})

images.forEach(img => {
    img.classList.add('loading') //додаємо код для анімації
    observer.observe(img)
})

document.querySelector('.button').addEventListener('click', () => {
    images.forEach(img => observer.observe(img))
})
