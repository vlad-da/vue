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
});

const app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Привет мир'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
})

const app6 = new Vue ({
    el: '#app-6',
    data: {
        message1: 'How are u?',
        message: 'Hello world'
    }
})