import os
import generate
import utils
import config


def run(names):
    if not os.path.exists("src"):
        # os.system("mkdir src")
        generate.run()
        exit()

    if not len(names):
        names = input("please type fragments names : ").split(" ")

        if not len(names):
            exit()

    if not os.path.exists("src/fragments"):
        os.system("mkdir src/fragments")
        os.system("touch src/fragments/index.js")

    for name in names:
        if name == name.capitalize():
            lname = name.lower()
            print(lname)
            if not os.path.exists("src/fragments/%s" % lname):
                os.system("mkdir src/fragments/%s" % lname)
                os.system("mkdir src/fragments/%s/core" % lname)
                os.system("touch src/fragments/%s/core/index.js" % lname)
                os.system("touch src/fragments/%s/core/style.js" % lname)
                utils.add_import(name, "./%s" % lname, "src/fragments/%s/index.js" % lname)
                utils.add_import(name, "./%s" % lname, "src/fragments/index.js")
                fs = open("src/fragments/%s/%s.js" % (lname, lname), "w")
                fs.write(utils.create_component(name))
                fs.close()

    print("start")
    print(names)
