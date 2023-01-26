$("document").ready(function(){
   $('.seasons a').click(function(e){//find all a tags inside class of seasons
       e.preventDefault();//stop default submission
       var season = $(this).attr("href");//contents of href attribute of this element
       //alert(season);

       season = season.toLowerCase();

      switch(season){
         case "spring":
            $("#logo").attr("src","images/spring.gif");
            //#2B7129
            $("html").css("background-color","#2B7129");

            $("#wear").attr("src","images/spring-wear.jpg");

            $("#sent").text("Leap Into Spring rain");


         break;
         case "summer":
            $("#logo").attr("src","images/summer.gif");
            //#EBA52B
            $("html").css("background-color","#EBA52B");

            $("#wear").attr("src","images/summer-wear.jpg");

            $("#sent").text("Lay in the Summer Sun!");


         break;
         case "fall":
            $("#logo").attr("src","images/fall.gif");
            //#EBA52B
            $("html").css("background-color","#A81124");

            $("#wear").attr("src","images/fall-wear.jpg");

            $("#sent").text("Watch the leafs fall in fall");


         break;
         case "winter":
            $("#logo").attr("src","images/winter.gif");
            //#EBA52B
            $("html").css("background-color","#005393");

            $("#wear").attr("src","images/winter-wear.jpg");

            $("#sent").text("Its Winterr BRrr!!");


         break;



         default:
            $("#logo").attr("src","images/four-seasons.gif");
            //#EBA52B
            $("html").css("background-color","#ccc");

            $("#wear").attr("src","images/300x400.png");

            $("#sent").text("Outfitter for All Seasons!");


      
      }




   });
});
