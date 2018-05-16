import json


class Section:
    def __init__(self, title, link):
        self.title = title
        self.link = link
        self.items = []

    def add_item(self, content):
        self.items.append(content)
        print(content)
        print("Job added!")

    def __iter__(self):
        for value in self.items:
            yield value

    def export_content(self):
        d = {'title': self.title, 'link': self.link, 'info': list(self)}
        return d


work = Section("Work", "work")
with open('/Users/Dustin/Documents/Gits/Web/dustinknopoff.github.io/src/templates/data.json', 'r') as f:
    data = json.load(f)
    for job in data['sections'][0]['info']:
        work.add_item(job)
print(work.export_content())
