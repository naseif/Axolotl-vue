var app = new Vue({
    el: '#app',
    data: {
      boards:[]
    }
  })

axios.get('http://localhost:51337/')
  .then(function (response) {
    app._data.boards = response.data

    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });