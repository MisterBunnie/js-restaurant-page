export function initialPageLoad() {
    const contentDiv = document.querySelector('#content')
    const heading = document.querySelector('h1')
    heading.textContent = "Welcome to Deadpool's Restaurant"
    heading.classList.add('landing-page')
    contentDiv.appendChild(heading)

    const topImage = document.createElement('img')
    topImage.classList.add('top-image')
    topImage.src = '../src/assets/deadpool.jpg'
    topImage.alt = 'Image of Restaurant'
    contentDiv.appendChild(topImage)

    const para1 = document.createElement('p')
    para1.classList.add('landing-page-copy')
    para1.textContent =
        'This is an upscale restaurant that touts its elegance and spacious dining/lounge areas.'
    contentDiv.appendChild(para1)

    const para2 = document.createElement('p')
    para1.classList.add('landing-page-copy')
    para1.textContent =
        'Attire required for facility is business casual at a minimum, please!'
    contentDiv.appendChild(para2)

    const para3 = document.createElement('p')
    para1.classList.add('landing-page-copy')
    para1.textContent = 'Thanks, Management'
    contentDiv.appendChild(para3)
}
