var Index = Vue.extend({
    template: '#home',
    data: function() {
        return {result: '',symbol: ''};
    },
    computed: {

    }
});

var router = new VueRouter({
    routes: [
        { path: '/', component: Index },
    ]
});
new Vue({
    router
}).$mount('#app')