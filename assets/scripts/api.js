const config = require('./config')
const store = require('./store')

// const trailsIndex = function(){
//   console.log(store)
//   // make GET request to /trails
//   return $.ajax({
//     url: config.apiUrl + '/trails/',
//     method: 'GET'
//   })
// }
//
// const getTrail = function (data) {
//     console.log('data is ', data)
//     console.log(store)
//   return $.ajax({
//     url: config.apiUrl + '/trails/' + data.trail.id,
//     method: 'GET',
//     headers:{
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
//
// const destroyTrail = function (data) {
//   console.log('data is ', data)
//   console.log(store)
//   console.log(data.trail.id)
//   return $.ajax({
//     url: config.apiUrl + '/trails/' + data.trail.id,
//
//     method: 'DELETE',
//     headers:{
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
//
// const updateTrail = function (data) {
//   console.log('data is ', data)
//   console.log(store)
//   return $.ajax({
//     url: config.apiUrl + '/trails/' + data.trail.trail_id,
//     method: 'PATCH',
//     headers: {
//         Authorization: 'Token token=' + store.user.token
//       },
//       data
//       // data: data
//     })
//   }

const createMemory = function (data) {
  console.log('data is ', data)
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/memories/',
    method: 'POST',
    headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data
      // data: data
    })
  }

  const memoriesIndex = function(data){
  console.log('data is ', data)
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
    url: config.apiUrl + '/memories/' + data.family.id,
    method: 'GET',
    headers:{
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

  // const createFirsts = function (data) {
  //   console.log('data is ', data)
  //   console.log(store)
  //   return $.ajax({
  //     url: config.apiUrl + '/firsts',
  //     method: 'POST',
  //     headers: {
  //         Authorization: 'Token token=' + store.user.token
  //       },
  //       data
  //       // data: data
  //     })
  //   }
  //
  //   const createFavorites = function (data) {
  //     console.log('data is ', data)
  //     console.log(store)
  //     return $.ajax({
  //       url: config.apiUrl + '/favorites',
  //       method: 'POST',
  //       headers: {
  //           Authorization: 'Token token=' + store.user.token
  //         },
  //         data
  //         // data: data
  //       })
  //     }

module.exports = {
  // trailsIndex,
  // getTrail,
  // destroyTrail,
  // updateTrail,
  createMemory,
  memoriesIndex,
  getMemory,
  // createFirsts,
  // createFavorites
}
