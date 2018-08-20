// const store = require('./store')
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')


const showCreateFamily = () => {
  $('#wrapper-birth').fadeIn(); $('#wrapper-firsts,#wrapper-favorites').hide();
}

const showCreateFirsts = () => {
  $('#wrapper-firsts').fadeIn(); $('#wrapper-birth,#wrapper-favorites').hide();
}

const showCreateFavorites = () => {
  $('#wrapper-favorites').fadeIn(); $('#wrapper-birth,#wrapper-firsts').hide();
}

const showDisplayMemories = () => {
  $('#wrapper-display-memories').fadeIn(); $('#wrapper-birth, #wrapper-firsts,#wrapper-favorites').hide();
}
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

// const onGetTrail = function (event) {
//   event.preventDefault()
//
//   // create js object from user form data
//   const data = getFormFields(event.target)
//
//   // input validation
//   if (data.trail.id === '') {
//     $('#content').html('<p>ID is required</p>')
//
//   } else {
//
//     // make API call with data
//     api.getTrail(data)
//       .then(ui.onGetSuccess)
//       .catch(ui.onError)
//   }
//  }

// const onDestroyTrail = function (event) {
//   event.preventDefault()
//
//   const data = getFormFields(event.target)
//
//   // input validation
//   if (data.trail.id === '') {
//     $('#content').html('<p>ID is required</p>')
//
//   } else {
//     api.destroyTrail(data)
//       .then(ui.onDestroySuccess)
//       .catch(ui.onError)
//   }
// }

// const onUpdateTrail = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   // input validation
//   if (data.trail.id === '') {
//     $('#content').html('<p>ID is required</p>')
//   } else if (data.trail.trail_name === '') {
//     $('#content').html('<p>Trail name is required</p>')
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

const onCreateFamily = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createFamily(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
  }


const onCreateFirsts = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createFirsts(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
  }


const onCreateFavorites = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createFavorites(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
  }

//   // input validation
//   if (data.family.family_name === '') {
//     $('#content').html('<p>Trail name is required</p>')
//   } else if (data.trail.location === '') {
//     $('#content').html('<p>Location is required</p>')
//   } else if (data.trail.id === '') {
//     $('#content').html('<p>ID is required</p>')
//   } else if (data.trail.distance === '') {
//     $('#content').html('<p>Distance is required</p>')
//   } else if (data.trail.elevation_gain === '') {
//     $('#content').html('<p>Elevation gain is required</p>')
//   } else if (data.trail.trail_type === '') {
//     $('#content').html('<p>Trail type is required</p>')
//   } else if (data.trail.skill_level === '') {
//     $('#content').html('<p>Skil level is required</p>')
//   } else {



const addHandlers = () => {
   $('#sign-in').on('submit', showCreateFamily);
   $('#birthday').on('submit', showCreateFirsts);
   $('#baby-firsts').on('submit', showCreateFavorites);
    $('#baby-favorites').on('submit', showDisplayMemories);
}

module.exports = {
  // onTrailsIndex,
  // onGetTrail,
  // onDestroyTrail,
  // onUpdateTrail,
  onCreateFamily,
  onCreateFirsts,
  onCreateFavorites
}
