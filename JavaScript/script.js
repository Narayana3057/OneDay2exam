  
//home page script

  
 var st="";

 function move_to_years(k){
         
              document.location='A/year.html';
        
     }

//year.html script

//for open_close of each year begin

   function open_close(i,f,id1,id2){
        if(f=="opn"){
          document.getElementById(i).style.display = "block";
          document.getElementById(id2).style.display = "block";
          document.getElementById(id1).style.display = "none";
           }

       if(f=="cls"){
         document.getElementById(i).style.display = "none";
        document.getElementById(id2).style.display = "none";
        document.getElementById(id1).style.display = "block";
       }
   
  }
//end

//for downloading notes begin
  var subject;

  function Lecture_fun(i){

      subject=i;
      document.getElementById('lecture-notes_id').style.display='block';
       document.getElementById("h1id").innerHTML = i;
  }
  function oneday2exam_fun(i){
      subject=i;
      document.getElementById('oneday2exam_id').style.display='block';
      document.getElementById("h2id").innerHTML = i;
      
  }
  
  function download(k){

    var name='../'+'Lec_notes/'+subject+'_'+k+'.pdf';
    window.open(name,'_blank');
     
  }

  //end

 //for top button begin()

//Get the button
       var mybutton = document.getElementById("up");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }


    //end