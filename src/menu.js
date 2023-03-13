export function menu() {
    const contentDiv = document.querySelector('#content')

    //Remove any existing DOM children if present
    contentDiv.replaceChildren()

    //DOM for heading
    const heading = document.createElement('h1')
    heading.textContent = "Welcome to Deadpool's Restaurant"
    heading.classList.add('landing-title')
    contentDiv.appendChild(heading)

    //DOM for pasta image
    const pastaImage = document.createElement('img')
    pastaImage = classList.add('image')
    pastaImage.src = '..src/assets/pasta.jpg'
    pastaImage.alt = 'Pasta Image'
    contentDiv.appendChild(pastaImage)

    //DOM for p tag for Pasta
    const paraPasta = document.createElement('p')
    paraPasta.classList.add('menu-copy')
    paraPasta.textContent = "Feel invited to try the famous Deadpool's Pasta "
    contentDiv.appendChild(paraPasta)

    //DOM for glamorous moment
    const glamorousMoment = document.createElement('img')
    glamorousMoment.classList.add('image')
    glamorousMoment.src = '../src/assets/pasta1.jpg'
    glamorousMoment.alt = 'Glamorous Moment'
    contentDiv.appendChild(glamorousMoment)

    //DOM for p tag for the glamorous moment
    const paraGlamorousMoment = document.createElement('p')
    paraGlamorousMoment.classList.add('menu-copy')
    paraGlamorousMoment.textContent = 'It looks delicious , right ? '
    contentDiv.appendChild(paraGlamorousMoment)
}
