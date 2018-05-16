function execute(e, l) {
    // Get link from button click
    var link = e.substr(e.indexOf("#"), e.length);
    // Get all buttons that link to content
    var btns = document.getElementsByClassName("menus");

    // For every button, remove 'active' class and add `this.`/active class to current
    var a = document.getElementsByTagName('a');
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('active');
        if(a[i].innerText.substr(0,5) === 'this.') {
            var text = a[i].innerText;
            text = a[i].innerText.substr(5, a[i].innerText.length);
            a[i].innerText = text;
        }
    }
    l.className += 'active';
    var txt = l.innerText;
    txt = 'this.' + txt;
    l.innerText = txt;
    // Check in JSON
    for (x in data['links']) {
        // where link matches
        if (data['links'][x]["link"] === link) {
            // and it's the skills section
            if (data['links'][x]['name'] === 'Skills') {
                // Generate output with corresponding values
                var output = Mustache.render("<div class=\"row\" id=\"{{link}}\">\n" +
                    "    {{#info}}\n" +
                    "        <h1>{{1}}</h1>\n" +
                    "    {{/info}}\n" +
                    "</div>", data['links'][x]);
                document.getElementById("content").innerHTML = output;
            } else {
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
                document.getElementById("content").innerHTML = output;
            }
        } else if (link === "") {
            // if there is no match clear the content pane
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
                    // Where 1 is title, 2 is company, 3 is time, 4 is place, 5 is description
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
                    "1": "CRM Intern",
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
            // Where 1 is degree, 2 is university, and 3 is time
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
                    "3": "August 2016 - December 2016"
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
            "link": "#skill",
            "info": [
                // where 1 maps the skills correctly to mustache template
                // where 1 maps the skills correctly to mustache template
                {"1": "Python"},
                {"1": "Java"},
                {"1": "SQL"},
                {"1": "HTML/CSS/Javascript"},
                {"1": "Terminal"},
                {"1": "MVC"},
                {"1": "Sketch/InVision"},
                {"1": "Adobe"},
                {"1": "Office Suite"},
                {"1": "Git"}
            ]
        }
        // {
        //     "name": "Portfolio",
        //     "link": "#port"
        // }
    ]
};