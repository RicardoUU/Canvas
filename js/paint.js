var Paincolor;
layui.use('colorpicker', function(){
    var colorpicker = layui.colorpicker;
    //渲染
    colorpicker.render({
      elem: '#test1',  //绑定元素
      // format:"rgba",
      alpha: true,
      predefine: true,
      colors: ['#F00','#0F0','#00F','rgb(255, 69, 0)','rgba(255, 69, 0, 0.5)'],
      done: function(color){
        // console.log(color)
        Paincolor = color;
        //譬如你可以在回调中把得到的 color 赋值给表单
      }
    });
  });







var canvasData = [];
var canvas = $('#canvas')[0];
var cxt = canvas.getContext('2d');

$('#canvas').bind('mousedown',function(event){

    var MousePosX = event.clientX - canvas.offsetLeft;
    var MousePosY = event.clientY - canvas.offsetTop;

    cxt.beginPath();
    cxt.strokeStyle = Paincolor;
    cxt.moveTo(MousePosX,MousePosY);

    var imgData = cxt.getImageData(0,0,canvas.width,canvas.height);
    canvasData.push(imgData);

    // 鼠标移动 
    $('#canvas').bind('mousemove',function(event){
        var PX = event.clientX - canvas.offsetLeft;
        var PY = event.clientY - canvas.offsetTop;
        cxt.lineTo(PX,PY);
        cxt.stroke();



    })
    $('#canvas').bind('mouseup',function(){

        $('#canvas').unbind('mousemove');
        cxt.closePath();

    })
    $('.cancel').click(function(){

    cxt.putImageData(canvasData.pop(),0,0);

})
    
})


