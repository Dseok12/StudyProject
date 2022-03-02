const BASE_URL = 'https://api.hnpwa.com/v0';

const _get = (target) => {
  return document.querySelector(target)
}

const createListElement = () => {
  const _listItem = document.createElement('li')
  _listItem.innerHTML = `
            <li>
              <a href="" class="title">${title}</a>
              <div class="info">
                <a href="" class="user"><span>${user}</span></a>
                <a href="" class="domain"><span>${domain}</span></a>
                <span class="date">${date}</span>
                <span class="time">${time}</span>
                <span class="time_ago">${time_ago}</span>
              </div>
            </li>
  `
  return _listItem;
}



const main = () => {

}

const init = () => {
  window.addEventListener('DOMContentLoaded', main)
}
init()