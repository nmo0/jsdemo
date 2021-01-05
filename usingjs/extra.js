/**
 * 这个js其实是由api动态生成的，此代码用来示例生成的结果
 * 以ASP.NET Core示例
 * return Content("var i = 1; alert(i); -- 创建表单等等", "application/javascript");
 */

(function (window, undefined) {

    var zh_settings = {
        beforeSubmit: function (data) { },
        afterSubmit: function (res) { }
    };

    var html = `<form id='frm_动态创建的id'>
       <input type='text' name='name'/>
       <input type='text' name='age'/>
       <input type='hidden' name='avatar'/>
       <input id='submit_动态创建的id' type='button' value='提交'/>
   </form>`;

    var anchor = document.querySelector('#anchor_TYIU');

    anchor.innerHTML = html;

    var submitButton = document.querySelector('#submit_动态创建的id');

    submitButton.onclick = function () {

        var data = {
            name: document.querySelector('#frm_动态创建的id input[name="name"]').nodeValue,
            age: document.querySelector('#frm_动态创建的id input[name="age"]').nodeValue
        };

        // 接入留资模块的页面需要实现 beforeSubmit 函数以初始化数据（例如微信认证后获取到的用户昵称头像等）
        zh_settings.beforeSubmit && zh_settings.beforeSubmit(data);

        // 假设使用了jQuery框架，使用它的post方法调接口
        // 这个是留资保存接口
        $.post('https://www.example.com/data/submit', data, function (res) {
            if (success) {
                if (zh_settings.afterSubmit) {
                    zh_settings.afterSubmit(data);
                } else {
                    alert('提交成功');
                }
            }
        });
    };

    window.ZH = zh_settings;
})(window, undefined);
