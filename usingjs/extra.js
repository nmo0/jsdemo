<!DOCTYPE html>
<html>

<head>
</head>

<body>
    <div id="app">
        <h1>{{ message }}</h1>
        <div id="anchor_TYIU">
            <!--锚点，用于往此处添加表单-->
        </div>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script src="extra.js"></script>
<script>
    (function () {
        var router = new VueRouter({
            routes:[
                {name:'home',path:'/home/:code'}
            ]
        });

        // Vue.use(VueRouter);

        var app = new Vue({
            el: '#app',
            router:router,
            data: {
                message: 'Hello Vue!'
            },
            mounted: function () {     //页面加载完成后执行的方法
                // 执行重定向啊，调用接口啊，等等
                // 假设此时微信认证完成了，拿到用户信息了
                var user = {
                    avatar: "https://avatar.qq.com/abc.jpeg",
                    openid: "GHGKJLHFYTRTYUGO",
                };

                // 营销员代码
                alert(this.$route.params.code);

                ZH.beforeSubmit = function (data) {
                    data['avatar'] = user.avatar;
                    data['openid'] = user.openid;
                }
            },
            methods: {
                method1: function () {
                    alert(666);
                }
            }
        })
    })();
</script>

</html>
