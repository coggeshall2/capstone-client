// const store = require('./store')
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')



const onMemoriesIndex = function(event){
  // prevent default submit action
  event.preventDefault()
  console.log('get memories ran')
  // make API call
  api.memoriesIndex()
// console.log('api call')
  // if API call is successful then
  .then(ui.onIndexSuccess)
// console.log('onIndexSuccess')
  // if API call fails then
  .catch(ui.onError)
}

const onGetMemory = function (event) {
  event.preventDefault()

  // create js object from user form data
  const data = getFormFields(event.target)

  // input validation
  if (data.memory.id === '') {
    $('#content').html('<p>ID is required</p>')

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
    $('#content').html('<p>ID is required</p>')

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
  if (data.memory.given_name === '') {
    $('#content').html('<p>Given name is required</p>')
  } else if (data.memory.family_name === '') {
    $('#content').html('<p>Family name is required</p>')
  } else if (data.memory.id === '') {
    $('#content').html('<p>ID is required</p>')
  } else if (data.memory.birth_date === '') {
    $('#content').html('<p>Birth date is required</p>')
  } else if (data.memory.birth_weight === '') {
    $('#content').html('<p>Birth weight is required</p>')
  } else if (data.memory.birth_length === '') {
    $('#content').html('<p>Birth length is required</p>')
  } else if (data.memory.hospital_name === '') {
    $('#content').html('<p>Hospital name is required</p>')
  } else if (data.memory.doctor_name === '') {
    $('#content').html('<p>Doctor name is required</p>')
  } else if (data.memory.other_memory === '') {
    $('#content').html('<p>Other memory is required</p>')
  } else {
    api.updateMemory(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onError)
    }
}

const onCreateMemory = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // input validation
  if (data.memory.given_name === '') {
    $('#content').html('<p>Given name is required</p>')
  } else if (data.memory.family_name === '') {
    $('#content').html('<p>Family name is required</p>')
  } else if (data.memory.id === '') {
    $('#content').html('<p>ID is required</p>')
  } else if (data.memory.birth_date === '') {
    $('#content').html('<p>Birth date is required</p>')
  } else if (data.memory.birth_weight === '') {
    $('#content').html('<p>Birth weight is required</p>')
  } else if (data.memory.birth_length === '') {
    $('#content').html('<p>Birth length is required</p>')
  } else if (data.memory.hospital_name === '') {
    $('#content').html('<p>Hospital name is required</p>')
  } else if (data.memory.doctor_name === '') {
    $('#content').html('<p>Doctor name is required</p>')
  } else if (data.memory.other_memory === '') {
    $('#content').html('<p>Other memory is required</p>')
  } else {
    api.createMemory(data)
      .then(ui.onCreateSuccess)
      .catch(ui.onError)
    }
}




module.exports = {
  onMemoriesIndex,
  onGetMemory,
  onDestroyMemory,
  onUpdateMemory,
  onCreateMemory
}
