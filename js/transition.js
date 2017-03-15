var vm = new Vue({
    el: '#demo',
    data: {
        show: true
    }
});
var vm2 = new Vue({
    el: '#example1',
    data: {
        show: true
    }
});
var vm3 = new Vue({
    el: '#example2',
    data: {
        show: true
    }
});
var vm4 = new Vue({
    el: '#example3',
    data: {
        show: true
    }
});
var vm5 = new Vue({
    el: '#example4',
    data: {
        show: true
    },
    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0;
            el.style.transformOrign = 'left';
        },
        enter: function (el, done) {
            Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
            Velocity(el, { fontSize: '1em' }, { complete: done })
        },
        leave: function (el, done) {
            Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
            Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
            Velocity(el, {
                rotateZ: '45deg',
                translateY: '30px',
                translateX: '30px',
                opacity: 0
            }, { complete: done })
        }
    }
}
);

var vm6 = new Vue({
    el: '#example5',
    data: {
        view: 'v-a'
    },
    components: {
        'v-a': {
            template: '<div>ComponentA</div>'
        },
        'v-b': {
            template: '<div>ComponentB</div>'
        }
    }
});

var vm7 = new Vue({
    el: '#example6',
    data: {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10
    },
    methods: {
        add: function () {
            this.items.splice(this.randomIndex(), 0, this.nextNum++);
        },
        remove: function () {
            this.items.splice(this.randomIndex(), 1)
        },
        randomIndex: function () {
            return Math.floor(Math.random() * this.items.length);
        }
    }
});
new Vue({
    el: '#staggered-list-demo',
    data: {
        query: '',
        list: [
            { msg: 'Bruce Lee' },
            { msg: 'Jackie Chan' },
            { msg: 'Chuck Norris' },
            { msg: 'Jet Li' },
            { msg: 'Kung Fury' }
        ]
    },
    computed: {
        computedList: function () {
            var vm = this
            return this.list.filter(function (item) {
                return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
            })
        }
    },
    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.height = 0
        },
        enter: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                    el,
                    { opacity: 1, height: '1.6em' },
                    { complete: done }
                )
            }, delay)
        },
        leave: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                    el,
                    { opacity: 0, height: 0 },
                    { complete: done }
                )
            }, delay)
        }
    }
})