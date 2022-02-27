const popupCats = document.querySelector('.popup_type_cats-info');
// const popupCatsAdd = document.querySelector('.popup popup_type_cats-add');
const popupCatsImage = popupCats.querySelector('.popup__image');
const popupCatsText = popupCats.querySelector('.popup__text');
const popupCatsName = popupCats.querySelector('.popup__name');
const catImages = document.querySelectorAll('.cat__image');
const closePopupCats = document.querySelector('.popup__close');
const cardTemplate = document.querySelector('#card-template');
const cardListContainer = document.querySelector('.cats-list');

function openPopup(popup) {
	popup.classList.add('popup_opened');
}
function closePopup(popup) {
	const popupActive = document.querySelector('.popup_opened');
	if (popupActive) {
		popupActive.classList.remove('popup_opened')
	}
}

function handeClosePopup() {
	closePopup(popupCats)
}

function createCardCat(dataCat) {
	const newCardElement = cardTemplate.content.querySelector('.cats-list__item').cloneNode(true);
	const cardImage = newCardElement.querySelector('.cat__image');
	const cardName = newCardElement.querySelector('.cat__name');
	cardImage.src = dataCat.img_link;
	cardImage.dataset.id = dataCat.id;
	cardName.textContent = dataCat.name;

	function handleClickCatImage() {
		popupCatsImage.src = dataCat.img_link;
		popupCatsName.textContent = dataCat.name;
		popupCatsText.textContent = dataCat.description;
		openPopup(popupCats)
	}

	cardImage.addEventListener('click', handleClickCatImage);

	return newCardElement;
}

function cardAddToContainer(elementNode, container) {
	container.append(elementNode)
}

cats.forEach(dataCat => cardAddToContainer(createCardCat(dataCat), cardListContainer))

closePopupCats.addEventListener('click', handeClosePopup);


