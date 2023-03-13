export function contact() {
    const contentDiv = document.createElement('#content')

    //Remove any existing DOM children if present
    contentDiv.replaceChildren()

    //DOM for heading
    const heading = document.createElement('h1')
    heading.textContent = "Welcome to Deadpool's Restaurant"
    heading.classList.add('landing-title')
    contentDiv.appendChild(heading)

    //DOM for phone image
    const phoneImage = document.createElement('img')
    phoneImage.classList.add('img')
    phoneImage.src = '../src/assets/phone-image.jpg'
    phoneImage.alt = 'Phone Image'
    contentDiv.appendChild(phoneImage)

    //DOM for p tag #1 for phone image
    const para1PhoneImage = document.createElement('p')
    paraContact.classList.add('contact-copy')
    paraContact.textContent = 'Call us +359 894 52 977'
    contentDiv.appendChild(para1PhoneImage)

    //DOM for email image
    const emailImage = document.createElement('img')
    emailImage.classList.add('image')
    emailImage.src = '../src/assets/email.jpg'
    emailImage.alt = 'Email Image'
    contentDiv.appendChild(emailImage)

    //DOM for p tag #1 for email image
    const para1EmailImage = document.createElement('p')
    para1EmailImage.classList.add('contact-copy')
    para1EmailImage.textContent = 'Email us at deadpoolsoriginal@gmail.com'
    contentDiv.appendChild(para1EmailImage)
}
