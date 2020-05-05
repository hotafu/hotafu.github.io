$(document).ready(function()
{
 var submit = $("button[type='submit']");
 submit.click(function()
             {
                var data = $('form#thongtin').serialize();
                $.ajax({
                          type : 'GET',
                          url : 'https://script.google.com/macros/s/AKfycbwFCxV8VjO2IZH7_YER1IeArVnHwK5Yjzj4VSot/exec',
                          dataType:'json',
                          crossDomain : true,
                          data : data,
                          success : function(data)
                        {
                if(data == 'false')
                        {
                           alert('Thêm không thành công, bạn cũng có thể sử dụng để hiển thị Popup hoặc điều hướng');
                        }else{
                           alert('Đã thêm dữ liệu vào Form');
                        }
             }
  });
  return false;
 });
});
