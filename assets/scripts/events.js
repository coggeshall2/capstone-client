// const store = require('./store')
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')




const showCreateMemory = () => {
  $('#wrapper-birth').show();
}

const showChangePassword = () => {
  $('.userInfo').show();
}
// const showCreateFirsts = () => {
//   $('#wrapper-firsts').fadeIn(); $('#wrapper-birth').hide();
// }
//
// const showCreateFavorites = () => {
//   $('#wrapper-favorites').fadeIn(); $('#wrapper-firsts').hide();
// }
//
// const showDisplayMemories = () => {
//   $('#wrapper-display-memories').fadeIn(); $('#wrapper-birth').hide();
// }
// const onTrailsIndex = function(event){
//   // prevent default submit action
//   event.preventDefault()
//   console.log('get trails ran')
//   // make API call
//   api.trailsIndex()
// // console.log('api call')
//   // if API call is successful then
//   .then(ui.onIndexSuccess)
// // console.log('onIndexSuccess')
//   // if API call fails then
//   .catch(ui.onError)
// }

const onGetMemory = function (event) {
  event.preventDefault()
  // create js object from user form data
  const data = getFormFields(event.target)
  // input validation
  if (data.memory.id === '') {
    $('#content-memory').html('<p>ID is required</p>')
  } else {
    // make API call with data
    api.getMemory(data)
      .then(ui.onGetSuccess)
      .catch(ui.onError)
  }
 }

const onDestroyMemory = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // input validation
  if (data.memory.id === '') {
    $('#content-memory').html('<p>ID is required</p>')
  } else {
    api.destroyMemory(data)
      .then(ui.onDestroySuccess)
      .catch(ui.onError)
  }
}

const onUpdateMemory = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // input validation
  if (data.memory.id === '') {
    $('#content-memory').html('<p>ID is required</p>')
  } else if (data.memory.given_name === '') {
    $('#content-memory').html('<p>Given name is required</p>')
  } else if (data.memory.family_name === '') {
    $('#content-memory').html('<p>Family name is required</p>')
  } else if (data.memory.birth_date === '') {
    $('#content-memory').html('<p>Birth date is required</p>')
  } else if (data.memory.birth_weight === '') {
    $('#content-memory').html('<p>Birth weight is required</p>')
  } else if (data.memory.birth_length === '') {
    $('#content-memory').html('<p>Birth length is required</p>')
  } else if (data.memory.hospital_name === '') {
    $('#content-memory').html('<p>Hospital name is required</p>')
  } else if (data.memory.doctor_name === '') {
    $('#content-memory').html('<p>Doctor name is required</p>')
  } else if (data.memory.memory === '') {
    $('#content-memory').html('<p>Other memory is required</p>')
    api.updateMemory(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onError)
    }
}

const onCreateMemory = function (event) {
  event.preventDefault()
console.log('create function begins')
  const data = getFormFields(event.target)
  // input validation
  // if (data.memory.id === '') {
  //   $('#content-memory').html('<p>ID is required</p>')
   if (data.memory.given_name === '') {
    $('#content-memory').html('<p>Given name is required</p>')
  } else if (data.memory.family_name === '') {
    $('#content-memory').html('<p>Family name is required</p>')
  } else if (data.memory.birth_date === '') {
    $('#content-memory').html('<p>Birth date is required</p>')
  } else if (data.memory.birth_weight === '') {
    $('#content-memory').html('<p>Birth weight is required</p>')
  } else if (data.memory.birth_length === '') {
    $('#content-memory').html('<p>Birth length is required</p>')
  } else if (data.memory.hospital_name === '') {
    $('#content-memory').html('<p>Hospital name is required</p>')
  } else if (data.memory.doctor_name === '') {
    $('#content-memory').html('<p>Doctor name is required</p>')
  } else if (data.memory.memory === '') {
    $('#content-memory').html('<p>Other memory is required</p>')
  } else {
  api.createMemory(data)
  // console.log('create memory ran, data is ', data)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
  }
}

  const onMemoriesIndex = function(event){
    // prevent default submit action
    event.preventDefault()
    console.log('get memories ran')
    // make API call
    api.memoriesIndex()
  console.log('api call')
    // if API call is successful then
    .then(ui.onIndexSuccess)
  console.log('onIndexSuccess')
    // if API call fails then
    .catch(ui.onError)
  }


const addHandlers = () => {
  $('#register').on('submit', showCreateMemory);
  // $('#memoryInfo').on('click', showCreateMemory);
  $('#seeInfo').on('click', showChangePassword);
  $('#memory-submit').on('submit', onCreateMemory);
  // $('#memory-submit').on('submit', onMemoriesIndex);
}

module.exports = {
  onDestroyMemory,
  onUpdateMemory,
  onCreateMemory,
  onMemoriesIndex,
  onGetMemory,
}
