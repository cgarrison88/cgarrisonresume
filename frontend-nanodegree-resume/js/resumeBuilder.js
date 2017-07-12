
// Biography //

var bio = {
  "name" : "Cody Garrison",
  "age" : 28,
  "role" : "Front End Web Developer",
    "contacts":{
    "mobile" : "702-786-8889",
    "email" : "codygarrison88@gmail.com",
    "github" : "cgarrison88",
    "location" : "Las Vegas, NV"
    },
"welcomeMessage" : "Hello, thanks for taking the time to checkout my page!",
    "skills" : ["HTML","CSS","JavaScript","Git"],
    "bioPic" : "images/resumepic.jpg"
};




//Contacts//


function displayBio() {
var formattedName = HTMLheaderName.replace("%data%",bio.name);

var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
  $("#header").append(formattedbioPic);

  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  $("#topContacts").append(formattedEmail);

  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
  $("#topContacts").append(formattedGithub);

  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  $("#topContacts").append(formattedLocation);

  var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").append(formattedMessage);
}
displayBio();

// Skills/

function displaySkills() {
if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
    $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
}
 }
displaySkills();

//Work//

function displayWork(){
var work = {
 "jobs": [

{
"employer" : "Colonial Life",
"title" : "Customer Service Specialist",
"dates" : "August 2017 - Present",
"location" : "Las Vegas, NV",
"description" : ["Service incoming calls",
" Answer questions about insurance policies",
" Check the status of insurance claims"]
},


{
"employer" : "Voya Financial",
"title" : "Customer Service Associate",
"dates" : "September 2015 - April 2017",
"location" : "Las Vegas, NV",
"description" : ["Service incoming calls",
" Answer questions about specific retirement plans",
" Process withdrawal and loan transactions for plan participants"]
},

{
"employer" : "Ameriprise Auto & Home Insurance",
"title" : "Inside Sales Agent",
"dates" : "October 2014 - August 2015",
"location" : "Las Vegas, NV",
"description" : "Took inbound calls from potential clients looking for Home and Auto Insurance quotes"
},

{
"employer" : "Starbucks Coffe Company",
"title" : "Shift Supervisor",
"dates" : "April 2010 - October 2014",
"location" : "Las Vegas, NV",
"description" :[
"Delegated tasks and staff management", " Promote new products and meet sales goals", " Complete inventory counts and cash management"]
 },

{
"employer" : "Panera Bread Company",
"title" : "Associate",
"dates" : "April 2008 - Febraury 2010",
"location" : "Cordova, TN",
"description" :["Preparing and stocking food", " Providing customer service", " Cleaning and closing kitchen", " Maintaining dining area"]
    }
   ]

  };

for (var j = 0; j < work.jobs.length; j++) {
$("#workExperience").append(HTMLworkStart);
$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[j].employer)+
HTMLworkTitle.replace("%data%", work.jobs[j].title) +
HTMLworkDates.replace("%data%", work.jobs[j].dates) +
HTMLworkLocation.replace("%data%", work.jobs[j].location) +
HTMLworkDescription.replace("%data%", work.jobs[j].description));

  }
}

displayWork();

//Projects//

function displayProjects(){

var projects = {
projects: [

{
"title" : "Animal Trading Card",
"date" :  "2017",
"description" : "Animal facts about a the kangaroo.",

"images": [ "images/kangarooProject.png"]

      },

  {
"title" : "Restaurant Project",
"date" :  "2017",
"description" : "Info about the restaurant Confusion.",

"images": ["images/RestaurantProject.png"]

      }

    ]
};


for (var p = 0; p < projects.projects.length; p++) {

$("#projects").append(HTMLprojectStart);
$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[p].title) + HTMLprojectDates.replace("%data%",projects.projects[p].date) + HTMLprojectDescription.replace("%data%",projects.projects[p].description));


if (projects.projects[p].images.length > 0) {

    for (var image in projects.projects[p].images) {
        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[p].images[image]);
        $(".project-entry:last").append(formattedImages);
      }

}


}






}

displayProjects();

//Education//

function displayEducation(){


var education = {
"schools": [

    {
 "school" : "Berklee College of Music",
 "city" : "Boston, MA",
"degree" : "Class of 2020",
"major" : "Songwriting & Electronic Music Production",
"year" :   "2015 - Present"
    },


   {
"school" : "Southwest Community College",
 "city" : "Memphis, TN",
"degree" : "No degree",
"major" : "Information Technology",
"year" :   "2013 - 2014"
   }]
,
"onlineCourses" : [
      {
  "school" : "Udacity",
"type" : "Nanodegree",
"title" : "Front End Web Developer",
"year" : "2017",
"url":"www.Udacity.com"

    },

    {
  "school" : "Coursera",
"type" : "Certification",
"title" : "HTML, CSS, JavaScript",
"year" : "2017",
"url":"https://www.coursera.org/account/accomplishments/certificate/Y875WY8V4FM4"


    },

{
 "school" : "Coursera",
"type" : "Certification",
"title" : "Front-End Web UI Frameworks and Tools",
"year" : "2017",
"url":"https://www.coursera.org/account/accomplishments/certificate/E6QT7M6XV8PH"
    }]
};

$("#education").append(HTMLschoolStart);
for (var e = 0; e < education.schools.length; e++) {

$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[e].school) + HTMLschoolDegree.replace("%data%", education.schools[e].degree) + HTMLschoolDates.replace("%data%", education.schools[e].year) + HTMLschoolLocation.replace("%data%", education.schools[e].city) + HTMLschoolMajor.replace("%data%", education.schools[e].major));

}
     $(".education-entry:last").append(HTMLonlineClasses);

    for (var c = 0; c < education.onlineCourses.length; c++) {

        $(".education-entry:last").append;
         (HTMLonlineTitle.replace("%data%",education.onlineCourses[c].title) + HTMLonlineSchool.replace("%data%",education.onlineCourses[c].school) +  HTMLonlineDates.replace("%data%",education.onlineCourses[c].year) + HTMLonlineURL.replace("%data%",education.onlineCourses[c].url))
    }
}


displayEducation();

//Track Clicks//

$(document).click(function(loc){

    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);

});

// Map //

$ ("#mapDiv").append(googleMap);

// International Name//

$("#main").append(internationalizeButton);

function inName(){
  bio.name = bio.name.trim().split(" ");
  console.log(bio.name);
  bio.name[1] = bio.name[1].toUpperCase();
  bio.name[0] = bio.name[0].slice(0,1).toUpperCase() + bio.name[0].slice(1).toLowerCase();


   console.log(bio.name[0] ,bio.name[1]);

    return bio.name[0]+" "+bio.name[1];
}




