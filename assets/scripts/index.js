'use strict'
const events = require('./events')
const authEvents = require('./auth/events')
const modals = require('./modals')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  authEvents.addHandlers()

  $('#memories-index').on('submit', events.onMemoriesIndex)
  $('#memories-show').on('submit', events.onGetMemory)
  $('#memories-delete').on('submit', events.onDestroyMemory)
  $('#memories-update').on('submit', events.onUpdateMemory)
  $('#memories-create').on('submit', events.onCreateMemory)
})
