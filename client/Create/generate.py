import json
import os
import config
import utils

types = config.types


def run():
    useNameIE = False
    nameIE = ""
    packege = {}
    os.system("mkdir src")

    value = input("use name import/export ? [Y/n] : ")
    if value.lower() != "n":
        useNameIE = True
        nameIE = config.nameIE + "/"
        with open("package.json", "r") as read_file:
            packege = json.load(read_file)
        packege["dependencies"]["@babel/plugin-syntax-object-rest-spread"] = '^7.8.3'

    print("-" * 40)

    for _type in types:
        value = input("create %s ? [Y/n] : " % _type)
        if value.lower() != "n":
            os.system("mkdir src/%s" % _type)
            os.system("touch src/%s/index.js" % _type)

            if _type == "contexts":
                fs = open("src/contexts/contextProvider.js", "w")
                fs.write(config.context)
                fs.close()
                utils.add_import("ContextProvider", "./contextProvider", "src/contexts/index.js")

            if useNameIE:
                packege["dependencies"][nameIE + _type] = "file:./src/" + _type

        print("-" * 40)

    if useNameIE:
        fs = open("package.json", "w")
        fs.write(json.dumps(packege))
        fs.close()
        # os.system("npm i")
