function changeprogram(str)
{
	
	if(str!='')
	{
		window.location.href=str;
	}
	
}


jQuery(document).ready(function($){
	
	$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    // Do something
	console.log(scroll);
	if(scroll<300)
	{
		
		$(".footer-fixed-bar").hide();
	}
	else
	{
		$(".footer-fixed-bar").show();
		
	}
});
  
/*  $('.list-inline-lis li').on('click', function() {
   $(".list-inline-lis li ul.sub-menu").hide();
   $(this).children("ul").show();
	});*/
  
$(".menu-item-has-children ul").hide();
$(".menu-item-has-children > a").click(function() {
  $(this).next("ul").toggle();
});



$("body").on("keyup", "form", function(e){
  if (e.which == 13){
    if ($("#next").is(":visible") && $("fieldset.current").find("input, textarea").valid() ){
      e.preventDefault();
      nextSection();
      return false;
    }
  }
});
 
 
$("#next").on("click", function(e){
  console.log(e.target);
   var i = $("fieldset.current").index();
  
   if(i==0)
   {
	  var application_type=$("#application_type").val(); 
	  if(application_type=="")
	  {	alert("Please select to Application type");
		$("#application_type").addClass('error');
		$("#application_type").focus();
        return false;		  
	  }
	  else
	  {
		 $("#application_type").removeClass('error'); 
	  }
	  
	  
	  var course=$("#course").val(); 
	  if(course=="")
	  {	alert("Please select to Course");
		$("#course").addClass('error');
		$("#course").focus();
        return false;		  
	  }
	  else
	  {
		 $("#course").removeClass('error'); 
	  }
	   
	  var applicant_name=$("#applicant_name").val(); 
	  if(applicant_name=="")
	  {	alert("Please Enter to Applicant Name");
		$("#applicant_name").addClass('error');
		$("#applicant_name").focus();
        return false;		  
	  }
	  else
	  {
		 $("#applicant_name").removeClass('error'); 
	  } 
	   var email_address=$("#email_address").val(); 
	  if(email_address=="")
	  {	alert("Please Enter to Email address");
		$("#email_address").addClass('error');
		$("#email_address").focus();
        return false;		  
	  }
	  else
	  {
		 $("#email_address").removeClass('error'); 
	  } 
	   var mobile_number=$("#mobile_number").val(); 
	  if(mobile_number=="")
	  {	alert("Please Enter to Mobile Number");
		$("#mobile_number").addClass('error');
		$("#mobile_number").focus();
        return false;		  
	  }
	  else
	  {
		 $("#mobile_number").removeClass('error'); 
	  } 
	  
	   var gender = document.getElementsByName('gender');
        var genValue = false;

        for(var k=0; k<gender.length;k++){
            if(gender[k].checked == true){
                genValue = true;    
            }
        }
        if(!genValue){
            alert("Please Choose the gender");
            return false;
        }
	 
   }
   
    if(i==1)
   {
	  	   
	  var present_street=$("#present_street").val(); 
	 
	  if(present_street=="")
	  {	alert("Please Enter to Street");
		$("#present_street").addClass('error');
		$("#present_street").focus();
        return false;		  
	  }
	  else
	  {
		 $("#present_street").removeClass('error'); 
	  } 
	   var present_city=$("#present_city").val(); 
	  if(present_city=="")
	  {	alert("Please Enter to City");
		$("#present_city").addClass('error');
		$("#present_city").focus();
        return false;		  
	  }
	  else
	  {
		 $("#present_city").removeClass('error'); 
	  } 
	   var present_state=$("#present_state").val(); 
	  if(present_state=="")
	  {	alert("Please Enter to State");
		$("#present_state").addClass('error');
		$("#present_state").focus();
        return false;		  
	  }
	  else
	  {
		 $("#present_state").removeClass('error'); 
	  } 
	  
	  
	 
   }
	   
	
  
nextSection();
	  
 
});
 
$("form").on("submit", function(e){
  if ($("#next").is(":visible") || $("fieldset.current").index() < 3){
    e.preventDefault();
  }
});
 
 
function goToSection(i){
  $("fieldset:gt("+i+")").removeClass("current").addClass("next");
  $("fieldset:lt("+i+")").removeClass("current");
  $("#section-tabs li").eq(i).addClass("current").siblings().removeClass("current");
  setTimeout(function(){
    $("fieldset").eq(i).removeClass("next").addClass("current active");
      if ($("fieldset.current").index() == 3){
        $("#next").hide();
        $("input[type=submit]").show();
      } else {
        $("#next").show();
        $("input[type=submit]").hide();
      }
  }, 80);
 
}
 
function nextSection(){
  var i = $("fieldset.current").index();
  var windowsize = $(window).width();
  
  if(windowsize>767)
  {
  if(i==0)
  {
	  $("#signup").css("min-height", "325px");
  }
  else if(i==1)
  {
	  $("#signup").css("min-height", "500px");
  }
  else if(i==2)
  {
	  $("#signup").css("min-height", "235px");
  }
  }
  else
  {
	if(i==0)
  {
	  $("#signup").css("min-height", "675px");
  }
  else if(i==1)
  {
	  $("#signup").css("min-height", "1900px");
  }
  else if(i==2)
  {
	  $("#signup").css("min-height", "540px");
  }  
	  
  }
  if (i < 3){
    $("#section-tabs li").eq(i+1).addClass("active");
    goToSection(i+1);
  }
}
 
$("#section-tabs li").on("click", function(e){
  var i = $(this).index();
  if ($(this).hasClass("active")){
    goToSection(i);
  } else {
    alert("Please complete previous sections first.");
  }
  
  var windowsize = $(window).width();
  
  if(windowsize>767)
  {
  if(i==0)
  {
	  $("#signup").css("min-height", "430px");
  }
   else if(i==1)
  {
	  $("#signup").css("min-height", "325px");
  }
  else if(i==2)
  {
	  $("#signup").css("min-height", "500px");
  }
  else if(i==4)
  {
	  $("#signup").css("min-height", "235px");
  }
  }
  else
  {
	if(i==0)
  {
	  $("#signup").css("min-height", "990px");
  }
  else if(i==1)
  {
	  $("#signup").css("min-height", "675px");
  }
  else if(i==2)
  {
	  $("#signup").css("min-height", "1900px");
  }
  else if(i==3)
  {
	  $("#signup").css("min-height", "540px");
  } 
	  
	  
  }
});


$('input:file').change(
    function(e) {
        var files = e.originalEvent.target.files;
        for (var i=0, len=files.length; i<len; i++){
            var n = files[i].name,
                s = files[i].size,
                t = files[i].type;
				
				
				if(t!='image/png' && t!='image/gif' && t!='image/jpg' && t!='image/jpeg')
				{
				  alert('File tyle is not valid')
				  $("#applicant_photo").val('');
				  return false;
					
				}
             
            if (s > 2000000) {
                 alert('File size is not valid')
				  $("#applicant_photo").val('');
				  return false;
            }
        }
    });

$("#course").change(function() {
	var course=$("#course").val();
	$(".show-sub").hide();
	if(course=='B.Tech.')
	{
		$(".show-sub").show();
		$(".show-sub-lable").html('Stream Applied (B.Tech)');
		$("#sub_course").html('<option value="">- Select a value -</option><option value="Computer Science and Engineering">Computer Science and Engineering</option> <option value="Electronics and Communication">Electronics and Communication</option> <option value="Mechanical Engineering">Mechanical Engineering</option>  <option value="Civil Engineering">Civil Engineering</option>   <option value="Information Technology">Information Technology</option>');
		
	}
	else if(course=='B.Tech LEET')
	{
		$(".show-sub").show();
		$(".show-sub-lable").html('Stream Applied (B.Tech LEET) ');
		$("#sub_course").html('<option value="">- Select a value -</option><option value="Computer Science and Engineering">Computer Science and Engineering</option> <option value="Electronics and Communication">Electronics and Communication</option> <option value="Mechanical Engineering">Mechanical Engineering</option>  <option value="Civil Engineering">Civil Engineering</option>   <option value="Information Technology">Information Technology</option>');
		
	}
	else if(course=='M.Tech.')
	{
		$(".show-sub").show();
		$(".show-sub-lable").html('Stream Applied (M.Tech) ');
		$("#sub_course").html('<option value="">- Select a value -</option><option value="Computer Science and Engineering">Computer Science and Engineering</option> <option value="Electronics and Communication">Electronics and Communication</option>');
		
	}
	
	
	
});
});

function checkvalue()
{
	
	var present_street=$("#present_street").val();
	var present_additional=$("#present_additional").val();
	var present_city=$("#present_city").val();
	var present_state=$("#present_state").val();
	var present_pincode=$("#present_pincode").val();
	var present_country=$("#present_country").val();
	
	if ($('#checkaddress').is(':checked'))
{
      $("#current_street").val(present_street);
   $("#current_additional").val(present_additional);
   $("#current_city").val(present_city);
   $("#current_state").val(present_state);
   $("#current_pincode").val(present_pincode);
   $("#current_country").val(present_country);	
}
else
{
    $("#current_street").val('');
   $("#current_additional").val('');
   $("#current_city").val('');
   $("#current_state").val('');
   $("#current_pincode").val('');
   $("#current_country").val('');	
}
}



function EnableDisableTextBox(chkPassport) {
        var txtPassportNumber = document.getElementById("txtPassportNumber");
        txtPassportNumber.disabled = chkPassport.checked ? false : true;
        if (!txtPassportNumber.disabled) {
            txtPassportNumber.focus();
        }
    }
