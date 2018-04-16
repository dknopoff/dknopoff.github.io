// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }
// var data;
// //usage:
// readTextFile("/Users/Dustin/Documents/Gits/Python/portfolio/src/templates/index.json", function(text){
//     data = JSON.parse(text);
//     console.log(data);
// });

// var data = [
//     {
//         "section": "Work",
//         "href": "work",
//         "html": "<h1>This Works?</h1>"
//     }
// ];


function execute(e) {
    var link = e.substr(e.indexOf("#"), e.length);
    for (x in data['links']) {
        if (data['links'][x]["link"] === link) {
            console.log(data['links'][x]);
            var output = Mustache.render("<div class=\"my-row\" id=\"{{link}}\">\n" +
                "    {{#info}}\n" +
                "        <div class=\"my-card\">\n" +
                "            <div class=\"space\">\n" +
                "                <h1>{{1}}</h1>\n" +
                "                <h3>{{2}}</h3>\n" +
                "                <p>{{3}}<br/> {{4}}<br /> {{5}}</p>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    {{/info}}\n" +
                "</div>\n", data['links'][x]);
            console.log(output);
            document.getElementById("content").innerHTML = output;
        } else if (link === "") {
            document.getElementById("content").innerHTML = "<h1>Work in Progress!</h1>";
        }
    }
}


var data = {
  "title": "index",
  "links": [
    {
      "name": "Home",
      "link": "#"
    },
    {
      "name": "Work",
      "link": "#work",
      "info": [
        {
          "1": "QA Intern",
          "2": "Alice",
          "3": "June 2017 - August 2017",
          "4": "New York, NY",
          "5": "Researched and developed a proof of concept for automated testing; aided in functional,targeted, and regression testing."
        },
        {
          "1": "CRM Intern",
          "2": "eMarketer",
          "3": "August 2017 - Present",
          "4": "New York, NY (Remote)",
          "5": "Added, edited, and maintained Salesforce database in addition to writing and editing workflows, validation rules, and triggers."
        },
        {
          "1": "Web Developer",
          "2": "Flowvella",
          "3": "May 2017 - June 2017",
          "4": "Seattle, WA (Remote)",
          "5": "Built webpages using HTML and SCSS."
        },
        {
          "1": "Front End Intern",
          "2": "Avatar",
          "3": "June 2016 - August 2016",
          "4": "Buenos Aires, Argentina",
          "5": "Explored Javascript, HTML, SASS, and Github structure and proper application to web building."
        },
        {
          "1":"CRM Intern",
          "2": "eMarketer",
          "3": "May 2016 - June 2016",
          "4": "New York, NY",
          "5": "Researched potential clients, wrote and modified formulas and workflows in Salesforce in addition to adding, editing and modifying fields in database."
        },
        {
          "1": "Beta Tester",
          "2": "Flowvella",
          "3": "2015 - Present",
          "4": "Seattle, WA (Remote)",
          "5": "Test multiple beta versions through release of application."
        }
      ]
    },
    {
      "name": "Education",
      "link": "#edu",
      "info": [
        {
          "1": "Computer Science/Design",
          "2": "Northeastern University",
          "3": "January 2017 - Present"
        },
        {
          "1": "Computer Science",
          "2": "Clarkson University",
          "3":"August 2016 - December 2016"
        },
        {
          "1": "Computer Engineering",
          "2": "Clarkson University",
          "3": "August 2015 - April 2016"
        }
      ]
    },
    {
      "name": "Skills",
      "link": "#skill"
    },
    {
      "name": "Portfolio",
      "link": "#port"
    }
  ]
};