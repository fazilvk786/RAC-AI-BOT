const axios = require('axios')

const infoanime = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan nama anime.') }
        var url = `https://arugaz.herokuapp.com/api/dewabatch?q=${query} \n\n--oo0oo-- \n_M a d e   W i t h ❤️   *C h a n z ' B O T*_`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ hasil })
             })
    })
}

module.exports = infoanime
