/**
 * 这个js其实是由api动态生成的，此代码用来示例生成的结果
 * 以ASP.NET Core示例
 * return Content("var i = 1; alert(i); -- 创建表单等等", "application/javascript");
 */

(function (window, undefined) {

    var Ajax = {
        get: function (url, fn) {
            // XMLHttpRequest对象用于在后台与服务器交换数据   
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onreadystatechange = function () {
                // readyState == 4说明请求已完成
                if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
                    // 从服务器获得数据 
                    fn.call(this, xhr.responseText);
                }
            };
            xhr.send();
        },
        post: function (url, data, fn, errorFn) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            // 添加http头，发送信息至服务器时内容编码类型
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
                    fn.call(this, xhr.responseText);
                } else {
                    errorFn.call(this, xhr.responseText);
                }
            };
            xhr.send(data);
        }
    }

    var zh_settings = {
        beforeSubmit: function (data) { },
        afterSubmit: function (res) { }
    };

    // 这里也是动态生成的表单
    var html = `<form id='frm_动态创建的id'>
       <input type='text' name='name'/>
       <input type='text' name='age'/>
       <input type='hidden' name='avatar'/>
       <input id='submit_动态创建的id' type='button' value='提交'/>
   </form>`;

    var anchor = document.querySelector('#anchor_TYIU');

    anchor.innerHTML = html;

    setTimeout(function(){
        var submitButton = document.querySelector('#submit_动态创建的id');
    
        submitButton.addEventListener('click', function () {
    
            var data = {
                name: document.querySelector('#frm_动态创建的id input[name="name"]').nodeValue,
                age: document.querySelector('#frm_动态创建的id input[name="age"]').nodeValue
            };
    
            // 接入留资模块的页面需要实现 beforeSubmit 函数以初始化数据（例如微信认证后获取到的用户昵称头像等）
            zh_settings.beforeSubmit && zh_settings.beforeSubmit(data);
    
            Ajax.post('https://www.example.com/data/submit', data, function (res) {
                if (zh_settings.afterSubmit) {
                    zh_settings.afterSubmit(data);
                } else {
                    alert('提交成功');
                }
            }, function (res) {
                alert('失败');
            });
        });
    }, 1);


    window.ZH = zh_settings;
})(window, undefined);
