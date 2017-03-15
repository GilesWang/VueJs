Vue.component("example",{
    template:"<h1 v-on:click='UpdateMsg'>{{msg}}</h1>",
    data:function(){
        return {
            msg:"not updated"
        };
    },
    methods:{
        UpdateMsg:function(){
            this.msg="updated";
            console.log(this.$el.textContent);
            this.$nextTick(function(){
                console.log(this.$el.textContent);
            })
        }
    }
});