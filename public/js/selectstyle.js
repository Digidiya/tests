      $(function() {
      var i=1;
      let data='';
      
      for(i=1;i<16;i++){
          var j=i+1;
          var k=16-i;
      data+='<div id="pic'+i+'"><img src="images/male/'+i+'.png"  class="img-responsive" alt="Image 1"><a class="previous" href="#pic'+k+'"><img src="images/previous.png"></a><a class="next" href="#pic'+j+'"><img src="images/next.png"></a><h3>CHANGE HAIR STYLE</h3></div>';
      }
      	$("div#gallery").append(data);
      });