
$(document).ready(function(){
    $("#add").click(function(){
        var new_text=$("#txt").val();
        var list_of='<li id="op">'+ new_text +'</li>';
          
        $("#unorder").append(list_of);
        
        /*$(list_of).click(function(){
           
             $(".order").addClass("#op");*/
       
        });
    
    
    
            $("body").on('click','#op',function() {
            var sec_list ='<li >'+ $(this).html() +'</li>';
            /*$("#order").append($(this).html());*/
            $("#order").append(sec_list);
                
        });
            
            
            
            /*$(this).addClass(".order")*/
        
        /*var new_text=$("#txt").val();
        var list_of='<li>'+ new_text +'</li>'
        $("#order").append(list_of)
             */
   /*});*/
});