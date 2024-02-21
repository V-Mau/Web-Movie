const mongoose = require('mongoose');

const movieSchema =  new mongoose.Schema({
    title:{
        type: String,
        required: true 
    },
    year:{
        type: Number,
        required: true
    },
    director:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    genre:{
        type: [String],
        required: true
    },
    rate:{
        type: Number,
        required: true,
        min: 5,
    },
    poster:{
        type: String,
        validate: {
            validator: function (imput){
                return imput.includes('https://');
            },
            message: props => `${props.value} no es una URL válida`
        }
        

    }

    
})
const Movie = mongoose.model('Movie', movieSchema);


module.exports = Movie;


//todo/ ----> Ejemplo mas resumido.

// const movieSchema =  new mongoose.Schema({

//     title : String,
//     year : Number,
//     director : String,
//     duration : String,
//     genre : [String],
//     rate : Number,
//     poster : String

// },
// {
//     required : true
// });