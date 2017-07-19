// Biography //
var bio = {
    "name": "Cody Garrison",
    "age": 28,
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "702-786-8889",
        "email": "codygarrison88@gmail.com",
        "github": "cgarrison88",
        "location": "Las Vegas, NV"
    },
    "welcomeMessage": "Hello, thanks for taking the time to checkout my page!",
    "skills": ["HTML", "CSS", "JavaScript", "Git", "Bootstrap", "Jquery"],
    "biopic": "images/resumepic.jpg"
};




//Contacts//


bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbioPic);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedLocation);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);



    // Skills//

    $("#header").append(HTMLskillsStart);

    for (var s = 0; s < bio.skills.length; s++) {

        $("#skills").append(HTMLskills.replace("%data%", bio.skills[s]));

    }

};

bio.display();

//Work//



var work = {
    "jobs": [

        {
            "employer": "Unum",
            "title": "Customer Service Specialist",
            "dates": "August 2017 - Present",
            "location": "Las Vegas, NV",
            "description": "Service incoming calls, Answer questions about insurance policies,Check the status of insurance claims"
        },


        {
            "employer": "Voya Financial",
            "title": "Customer Service Associate",
            "dates": "September 2015 - April 2017",
            "location": "Las Vegas, NV",
            "description": "Service incoming calls, Answer questions about specific retirement plans, Process withdrawal and loan transactions for plan participants"
        },

        {
            "employer": "Ameriprise Auto & Home Insurance",
            "title": "Inside Sales Agent",
            "dates": "October 2014 - August 2015",
            "location": "Las Vegas, NV",
            "description": "Took inbound calls from potential clients looking for Home and Auto Insurance quotes"
        },

        {
            "employer": "Starbucks Coffe Company",
            "title": "Shift Supervisor",
            "dates": "April 2010 - October 2014",
            "location": "Las Vegas, NV",
            "description": "Delegated tasks and staff management, Promote new products and meet sales goals, Complete inventory counts and cash management"
        },

        {
            "employer": "Panera Bread Company",
            "title": "Associate",
            "dates": "April 2008 - Febraury 2010",
            "location": "Cordova, TN",
            "description": "Preparing and stocking food,  Providing customer service, sCleaning and closing kitchen,  Maintaining dining area"
        }
    ]

};


work.display = function() {


    for (var j = 0; j < work.jobs.length; j++) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[j].employer) +
            HTMLworkTitle.replace("%data%", work.jobs[j].title) +
            HTMLworkDates.replace("%data%", work.jobs[j].dates) +
            HTMLworkLocation.replace("%data%", work.jobs[j].location) +
            HTMLworkDescription.replace("%data%", work.jobs[j].description));

    }



};

work.display();

//Projects//



var projects = {
    projects: [

        {
            "title": "Animal Trading Card",
            "dates": "2017",
            "description": "Animal facts about a the kangaroo.",

            "images": ["images/kangarooProject.png"]

        },

        {
            "title": "Restaurant Project",
            "dates": "2017",
            "description": "Info about the restaurant Confusion.",

            "images": ["images/RestaurantProject.png"]

        }

    ]
};

projects.display = function() {

    for (var p = 0; p < projects.projects.length; p++) {

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[p].title) + HTMLprojectDates.replace("%data%", projects.projects[p].dates) + HTMLprojectDescription.replace("%data%", projects.projects[p].description));


        for (var a = 0; a < projects.projects[p].images.length; a++) {


            var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[p].images[a]);
            $(".project-entry:last").append(formattedImages);
        }

    }




};


projects.display();

//Education//




var education = {

    "schools": [

        {
            "name": "Berklee College of Music",
            "location": "Boston, MA",
            "degree": "Class of 2020",
            "majors": ["Songwriting & Electronic Music Production"],
            "dates": "2015 - Present",
            "url": "https://online.berklee.edu/"
        },


        {
            "name": "Southwest Community College",
            "location": "Memphis, TN",
            "degree": "No degree",
            "majors": ["Information Technology"],
            "dates": "2013 - 2014",
            "url": "www.southwest.tn.edu/"
        }
    ],


    "onlineCourses": [{
            "school": "Udacity",
            "type": "Nanodegree",
            "title": "Front End Web Developer",
            "dates": "2017",
            "url": "www.Udacity.com"

        },

        {
            "school": "Coursera",
            "type": "Certification",
            "title": "HTML, CSS, JavaScript",
            "dates": "2017",
            "url": "https://www.coursera.org/account/accomplishments/certificate/Y875WY8V4FM4"


        },

        {
            "school": "Coursera",
            "type": "Certification",
            "title": "Front-End Web UI Frameworks and Tools",
            "dates": "2017",
            "url": "https://www.coursera.org/account/accomplishments/certificate/E6QT7M6XV8PH"
        }
    ]
};

education.display = function() {


    // $("#education").append(HTMLschoolStart);
    for (var e = 0; e < education.schools.length; e++) {

        $("#education").append(HTMLschoolStart);

        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[e].name) + HTMLschoolDegree.replace("%data%", education.schools[e].degree) + HTMLschoolDates.replace("%data%", education.schools[e].dates) + HTMLschoolLocation.replace("%data%", education.schools[e].location) + HTMLschoolMajor.replace("%data%", education.schools[e].majors));
    }

    $(".education-entry:last").append(HTMLonlineClasses);

    for (var c = 0; c < education.onlineCourses.length; c++) {

        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[c].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[c].school) + HTMLonlineDates.replace("%data%", education.onlineCourses[c].dates) + HTMLonlineURL.replace("%data%", education.onlineCourses[c].url));
    }

};


education.display();

//Track Clicks//

$(document).click(function(loc) {

    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);

});

// Map //

$("#mapDiv").append(googleMap);

// International Name//

$("#main").append(internationalizeButton);

function inName() {
    bio.name = bio.name.trim().split(" ");
    console.log(bio.name);
    bio.name[1] = bio.name[1].toUpperCase();
    bio.name[0] = bio.name[0].slice(0, 1).toUpperCase() + bio.name[0].slice(1).toLowerCase();


    console.log(bio.name[0], bio.name[1]);

    return bio.name[0] + " " + bio.name[1];
}
