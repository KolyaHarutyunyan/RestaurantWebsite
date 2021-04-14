def add_import(what, _from, to):
    fs = open(to, "a")
    fs.write("\nexport {%s} from '%s'" % (what, _from))
    fs.close()
    # print(what, _from, to)


def create_component(name):
    return "export const %s = () =>{\n\treturn(\n\t\t<h1>%s</h1>\n\t)\n}" % (name, name)

