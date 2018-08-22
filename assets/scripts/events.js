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

// const onUpdateFamily = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   // input validation
//   if (data.family.id === '') {
//     $('#content-family').html('<p>ID is required</p>')
//   } else if (data.family.given_name === '') {
//     $('#content').html('<p>Given name is required</p>')
//   } else if (data.trail.location === '') {
//     $('#content').html('<p>Location is required</p>')
//   } else if (data.trail.distance === '') {
//     $('#content').html('<p>Distance is required</p>')
//   } else if (data.trail.elevation_gain === '') {
//     $('#content').html('<p>Elevation gain is required</p>')
//   } else if (data.trail.trail_type === '') {
//     $('#content').html('<p>Trail type is required</p>')
//   } else if (data.trail.skill_level === '') {
//     $('#content').html('<p>Skil level is required</p>')
//   } else {
//     api.updateTrail(data)
//       .then(ui.onUpdateSuccess)
//       .catch(ui.onError)
//     }
// }

const onCreateMemory = function (event) {
  event.preventDefault()
console.log('create function begins')
  const data = getFormFields(event.target)
  api.createMemory(data)
  console.log('create memory ran, data is ', data)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
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




// const onCreateFirsts = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.createFirsts(data)
//     .then(ui.onCreateSuccess)
//     .catch(ui.onError)
//   }
//
//
// const onCreateFavorites = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.createFavorites(data)
//     .then(ui.onCreateSuccess)
//     .catch(ui.onError)
//   }




const addHandlers = () => {
  $('#register').on('submit', showCreateMemory);
  $('#memoryInfo').on('submit', showCreateMemory);
  $('#seeInfo').on('click', showChangePassword);
  $('#memory-submit').on('submit', onCreateMemory);
   // $('#baby-firsts').on('submit', showCreateFavorites);
   // $('#baby-favorites').on('submit', showDisplayMemories);
}

module.exports = {


  onDestroyMemory,
  // onUpdateTrail,
  onCreateMemory,
  onMemoriesIndex,
  onGetMemory,
  // onCreateFirsts,
  // onCreateFavorites
}
