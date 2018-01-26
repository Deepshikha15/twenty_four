 var x;
/*var x=0;*/
 $(document).ready(function() {
 /*$(function() {*/
           /* $("#inc").click(function(){
                x++;
  
                $("#lbl").text(x);
            });*/
        /*$("#dec").click(function() 
                x--;
  
                $("#lbl").text(x);
            );*/
            /* });*/
     $("#inc").click(function(){

          x=$('#txt').val();
            x++; 
         
            $('#txt').val(x);

     });
            
     $("#dec").click(function(){

          x=$('#txt').val();
            x--; 
         
            $('#txt').val(x);

     });
    
     
});

 