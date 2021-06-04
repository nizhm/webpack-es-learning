import _ from 'lodash'
import './styles/index.scss'
import SoftwareCertificate from './assets/images/software-certificate.jpg'
import Contacts from './data/contacts.csv'

function component() {
  const element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')
  const myImage = new Image()
  myImage.src = SoftwareCertificate
  element.appendChild(myImage)
  return element
}

document.body.appendChild(component())
console.log('Contacts:')
console.log(Contacts)