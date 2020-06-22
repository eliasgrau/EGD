var projects =[


{	
	"name": "Eye",
	"pic": "<img src='img/eyeWebsiteCoverNoLogo.png'>",
	"detailPage": "'<a scr=''>",
	"descr": "<p>Glas: 05/19 </p>",

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

