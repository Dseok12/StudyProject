const API = `https://api.instantwebtools.net/v1/airlines`;

const _get = (target) => {
  return document.querySelector(target);
}

const _formBox = _get('.form_box');
const _nameInput = _get('.user_name');
const _countryInput = _get('.country');
const _submitBtn = _get('.submit_btn');


const handlePost = async (e) => {
  e.preventDefault();
  
  const dataQuery = {
    "name": _nameInput.value,
    "country": _countryInput.value
  }

  try{
    await fetch(API, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body:JSON.stringify(dataQuery)
    })
    console.log('성공')
  } catch(err) {
    console.error(err)
  }
  
}


_formBox.addEventListener('submit', handlePost)
