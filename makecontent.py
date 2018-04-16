#!/usr/bin/env python
import json, pystache

# def writing(path, name):
#     with open(path, 'r', encoding='utf8') as f:
#         j = json.load(f)
#         j['title'] = name
#         with open('/Users/Dustin/Documents/Gits/Python/portfolio/src/templates/index.mustache', 'r') as g:
#             data = g.read()
#             with open('/Users/Dustin/Documents/Gits/Python/portfolio/out/' + name + '.html', 'w+',
#                       encoding='utf8') as out:
#                 out.write(pystache.render(data, j))
#
#
# if __name__ == '__main__':
#     writing(sys.argv[2], sys.argv[1])


with open('/Users/Dustin/Documents/Gits/Python/portfolio/src/templates/index.json', 'r', encoding='utf8') as f:
    with open('/Users/Dustin/Documents/Gits/Python/portfolio/src/templates/pages.mustache', 'r') as g:
        page = g.read();
        j = json.load(f)
        all = []
        for section in j['links']:
            if 'Home' not in section['name']:
                d = {}
                d['section'] = section['name']
                d['href'] = section['link'].replace("#", '')
                try:
                        d['html'] = pystache.render(page, section)
                        print(d['html'])
                except KeyError:
                    d['html'] = ""
                all.append(d)

        with open('/Users/Dustin/Documents/Gits/Python/portfolio/src/templates/content.json', 'w+',
            encoding='utf8') as out:
            json.dump(all, out)
