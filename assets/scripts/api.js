const config = require('./config')
const store = require('./store')

const memoriesIndex = function(){
  console.log(store)
  // make GET request to /memories
  return $.ajax({
    url: config.apiUrl + '/memories/',
    method: 'GET'
  })
}

const getMemory = function (data) {
    console.log('data is ', data)
    console.log(store)
  return $.ajax({
    url: config.apiUrl + '/memories/' + data.memory.id,
    method: 'GET',
    headers:{
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const destroyMemory = function (data) {
  console.log('data is ', data)
  console.log(store)
  console.log(data.memory.id)
  return $.ajax({
    url: config.apiUrl + '/memories/' + data.memory.id,

    method: 'DELETE',
    headers:{
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateMemory = function (data) {
  console.log('data is ', data)
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/memories/' + data.memory.memory_id,
    method: 'PATCH',
    headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data
      // data: data
    })
  }

const createMemory = function (data) {
  console.log('data is ', data)
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/memories',
    method: 'POST',
    headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data
      // data: data
    })
  }

module.exports = {
  memoriesIndex,
  getMemory,
  destroyMemory,
  updateMemory,
  createMemory
}
