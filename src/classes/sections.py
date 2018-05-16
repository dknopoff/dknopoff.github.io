import json
from bs4 import BeautifulSoup


class Section:
    def __init__(self, title, link):
        """
        Initializes a section.
        :param title: The title of this section.
        :param link: It's associated link.
        """
        self.title = title
        self.link = link
        self.items = []

    def add_item(self, content):
        """
        Adds a dictionary to self.items
        :param content: Dictionary of elements in a section.
        """
        self.items.append(content)
        print("Job added!")

    def __iter__(self):
        """
        Override iteration to loop through self.items.
        """
        for value in self.items:
            yield value

    def export_content(self):
        """
        Converts parameters of this section to a dictionary.
        :return: dictionary of parameters in this section.
        """
        d = {'title': self.title, 'link': self.link, 'info': list(self)}
        return d

    def export_html(self):
        """
        Fills parameters into HTML template
        :return: formatted string to match HTML template.
        """
        results = f"""
        <div class="row" id="#{self.link}">
        """
        for item in self.items:
            if type(self.items[0]) is not dict:
                results += f"""
                <h1>{item}</h1>
                """
            else:
                results += f"""
                <div class="my-card">
                    <div class="space">
                        <h1>{item['title'] if 'title' in item.keys() else item['degree']}</h1>
                        <h3>{item['company'] if 'company' in item.keys() else item['school']}</h3>
                        <p>{item['date']} <br /> {item['location'] if 'location' in item.keys() else ""} <br /> 
                        {item['description'] if 'description' in item.keys() else ""}</p>
                        </div>
                    </div>
                </div>
                """
        results += "</div>"
        return results


def default_top():
    links = [
        {'name': 'this.Home', 'link': ''},
        {'name': 'Work', 'link': 'work'},
        {'name': 'Education', 'link': 'edu'},
        {'name': 'Skills', 'link': 'skill'}
    ]
    results = ""
    results += f"""
        <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Dustin Knopoff</title>
        <link rel="stylesheet" href="styles.css"/>
        <script src="index.js"></script>
        <link rel='shortcut icon' type='image/x-icon'
              href="https://res.cloudinary.com/dknopoff/image/upload/f_auto/v1520699504/portfolio/DKLogo.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
              integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous"/>
        <script src="https://cdn.rawgit.com/janl/mustache.js/master/mustache.min.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Lato" rel="stylesheet">
    </head>
    <body>
    <div class="main">
        <div class="title-block">
            <img src="https://res.cloudinary.com/dknopoff/image/upload/f_auto/v1520699504/portfolio/DKLogo.png" alt="Logo"
                 class="title-img"/>
            <h1 class="title">Dustin Knopoff</h1>
            <p class="subttile">Computer Science/Design Major at Northeastern University</p>
            <div class="icons">
                <a href="mailto:dustinknopoff@gmail.com">
                    <i class="fa fa-envelope fa-2x"></i>
                </a>
                <a href="https://github.com/dustinknopoff" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/dustinknopoff" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin fa-2x"></i>
                </a>
            </div>
            <p>made with <a href="https://mustache.github.io/mustache.5.html" target="_blank" rel="noopener noreferrer"
                            class="credit">Mustache</a>
                <br/>
                Photo by <a
                        href="https://unsplash.com/@nkachanovskyyy?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
                        target="_blank" rel="noopener noreferrer" class="credit">Nikita Kachanovsky </a>
                on Unsplash
            </p>
            <p>Made by Dustin Knopoff</p>
            <!--<img src="https://res.cloudinary.com/dknopoff/image/upload/v1523893789/profile.jpg" class="round"/>-->
        </div>
        <div>
            <ul id="links">
                <li class="menus active"><a href="#" onclick="execute(this.href, this)">this.Home</a></li>
                {{#links}}"""
    for x in links:
                    results += f"""<li class="menus"><a href="#{x['link']}" onclick="execute(this.href, this)">{x['name']}</a></li>
                    """
    results += """        {{/links}}
            </ul>
        </div>
        <div id="content">
    """
    return results


def default_bottom():
    results = ""
    results += """
        <div id="content">

        </div>
    </div>
    </body>
    </html>
    """
    return results


with open('/Users/Dustin/Documents/Gits/Web/dustinknopoff.github.io/src/templates/data.json', 'r') as f:
    data = json.load(f)
    sections = data['sections']
    out = ""
    out += default_top()
    for section in sections:
        sec = Section(section['name'], section['link'])
        for item in section['info']:
            sec.add_item(item)
        out += sec.export_html()
    out += default_bottom()
    soup = BeautifulSoup(out, 'html.parser')
    with open('/Users/Dustin/Documents/Gits/Web/dustinknopoff.github.io/out/index-1.html', 'w+', encoding='utf8') as writer:
        writer.write(out)
