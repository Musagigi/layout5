import '../css/main.css'

const INCREASE_NUMBER_ANIMATION_SPEED = 50;
let animationInited = false

function getElemCounter() {
	return document.querySelector('.clientCount')
}

function increaseNumberAnimationStep(i, element, endNumber) {
	if (i <= endNumber) {
		if (i === endNumber) {
			element.innerText = i + '+'
		} else {
			element.innerText = i
		}

		i += 100
	}

	setTimeout(() => {
		increaseNumberAnimationStep(i, element, endNumber)
	}, INCREASE_NUMBER_ANIMATION_SPEED)
}

function initIncreaseNumberAnimation() {

	increaseNumberAnimationStep(0, getElemCounter(), 5000)
}


function updateScroll() {
	let header = document.querySelector('header')
	if (window.scrollY > 0) {
		header.classList.add('header_scrolled')
	} else {
		header.classList.remove('header_scrolled')
	}

	let windowBottomPosition = window.scrollY + window.innerHeight;
	let positionElemCounter = getElemCounter().offsetTop

	if (windowBottomPosition >= positionElemCounter && !animationInited) {
		animationInited = !animationInited
		initIncreaseNumberAnimation()
	}
}

window.addEventListener('scroll', updateScroll)



let form = document.querySelector('#form')
let button = form.querySelector('button')
let budget = document.querySelector('#budget')

budget.addEventListener('change', function handleSelectChange(event) {
	console.log(event);
	if (event.target.value === 'other') {
		let formContainer = document.createElement('div')
		formContainer.classList = 'otherInput flex flex-col text-left'

		let input = document.createElement('input')
		input.classList = 'text-dark h-[60px] px-5 rounded-[15px]'
		input.placeholder = 'Введите ваш вариант'
		input.type = 'text'
		formContainer.append(input)
		form.insertBefore(formContainer, button)
	}

	let otherInput = document.querySelector('.otherInput')
	if (event.target.value !== 'other' && Boolean(otherInput)) {
		otherInput.remove()
	}
})
