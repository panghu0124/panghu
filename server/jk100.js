document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('jk100').addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表单默认提交行为

        var num = document.getElementById('num').value; // 假设num是通过id为'num'的表单元素传入的
        var a1 = 147 * num;
        var id = String(a1).padStart(6, '0'); // 生成6位数，‌不足前面补0
        var id2 = parseInt(id.substring(0, 3)) + parseInt(id.substring(3, 6));
        var password = String(id2).substring(0, 3);

        console.log(password); // 或者做其他处理，‌比如显示到页面上
    });
});
