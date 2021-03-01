function initService(){
    $('#nails').show();
    $('#shower').hide();
    $('#full').hide();

    $('#nails-btn').on('click',function(){
        $('#nails').show();
        $('#shower').hide();
        $('#full').hide();
    

    $('#shower-btn').on('click',function(){
        $('#nails').hide();
        $('#shower').show();
        $('#full').hide();
    
    $('#full-btn').on('click',function(){
        $('#nails').hide();
        $('#shower').hide();
        $('#full').show();
    
    });
    
window.onload = initService
