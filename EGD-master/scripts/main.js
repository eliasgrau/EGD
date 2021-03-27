var projects =[

{	
	"name": "Eye",
	"pic": "<img src='img/eyeWebsiteCoverNoLogo.png'>",
	"detailPage": "'<a scr=''>",
	"descr": "<p></p>",
},

{	
	"name": "Singbird",
	"pic": "<img src='img/Ashley_BTS_30.JPG'>",
	"detailPage": "'<a scr=''>",
	"descr": "<p></p>",
},

{	
	"name": "Dance Video Singbird",
	"pic": "<iframe src='https://player.vimeo.com/video/428957652' width='100%' height='600' frameborder='0' >",
	"detailPage": "'<a scr=''>",
	"descr": "<p></p>",
},

{	
	"name": "Singbird Logo",
	"pic": "<img src='img/BlackRedLargeBG1240.png'>",
	"detailPage": "'<a scr=''>",
	"descr": "<p> i designed the logo</p>",
},

{	
	"name": "Singbird Logo Guide",
	"pic": "<img src='img/LogoGuide.jpg'>",
	"detailPage": "'<a scr=''>",
	"descr": "<p></p>",
},

{	
	"name": "Singbird UI",
	"pic": "<img src='img/SingbirdProductDemo.jpg'>",
	"detailPage": "'<a scr=''>",
	"descr": "<p></p>",
},

]

for(var i=0; i<projects.length; i++){
	var projectSummary = $('<div/>', {
			'id': 'aProject'
		})
		.data('project', projects[i])
		.html(projects[i].pic) 
		.click(function(){ URL(google.com); });

	$('.container').append(projectSummary)
}

