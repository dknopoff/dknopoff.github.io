#!/usr/bin/env python
import json
import sys

import pystache

# local action
def writing(path, name):
    with open(path, 'r', encoding='utf8') as f:
        j = json.load(f)
        j['title'] = name
        with open('/Users/Dustin/Documents/Gits/Web/dustinknopoff.github.io/src/templates/index.mustache', 'r') as g:
            data = g.read()
            with open('/Users/Dustin/Documents/Gits/Web/dustinknopoff.github.io/out/' + name + '.html', 'w+',
                      encoding='utf8') as out:
                out.write(pystache.render(data, j))


if __name__ == '__main__':
    writing(sys.argv[2], sys.argv[1])