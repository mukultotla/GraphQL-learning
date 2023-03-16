const {UserList, MovieList} = require('../FakeData')
const _ = require('lodash')
const resolvers = {
    Query: {
        // User resolvers
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) });
            return user;
        }, 

        // Movie resolvers
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, {name});
            return movie;
        }
    },
    User: {
        favouriteMovie: () => {
            return _.filter(MovieList, (movie) => movie.releaseYear >=2002 && movie.releaseYear <=2015)
        }
    }
}
module.exports = {resolvers}