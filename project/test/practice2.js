console.log("Practice 2");
//document.querySelector('main').style.display="none";
$('main').hide();
$('main').hide();
$('nav a:first').hide();
//hide the last input
$('form input:last').hide();
//var copy = $('main').clone();
//$('main').append(copy);
//$('header').prepend(copy);
//$('h1').html("Hello");
//var text = `<ul><li>Hello</li></ul>`;
//$('#pets').append(text);

$('h1').on('click',function(){
    console.log('Click..');
    $(this).addClass('bordered');
});
$('h1').on('mouseenter',function(){
    console.log('mouse enters');
});
$('h1').on('mouseleave',function(){
    console.log('mouse leaves')
});

var text = `
<ul>
    <li> Element 1 </li>
    <li> Element 2 </li>
    <li> Element 3 </li>
</ul>
`;
$("#pets").append(text);

$("#pets").html("<ol> </ol>");
for(var i=0;i<3;i++){
    var li= $("<li></li>").text("Element"+i);
    $("ol").append(li);
}