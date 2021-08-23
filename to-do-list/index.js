'use strict'
const app = new Vue({
    el: '#app',
    data: {
        message: 'helo world'
    }
});

const app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

const app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: 'how'},
            {text: 'are'},
            {text: 'you'},
            {text: '?'}
        ]
    }
})