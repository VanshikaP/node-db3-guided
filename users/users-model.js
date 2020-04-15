const db = require('../data/db-config.js');

function find() {
    return db('users');
}

function findByID(id) {
    return db('users')
        .where({id})
        .first();
}

function findPosts(id) {
    return db('posts as p')
        .join('users as u', 'u.id', 'p.user_id')
        .select('p.id', 'u.username', 'p.contents')
        .where({ user_id: id});
}

function add(user) {
    return db('users').insert(user);
}
module.exports = {
    find,
    findByID,
    findPosts,
    add
    // update,
    // remove
}