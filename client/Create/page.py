import os
import generate
import utils

def run(names):
    if not os.path.exists("src"):
        # os.system("mkdir src")
        generate.run()
        exit()

    if not len(names):
        names = input("please type pages names : ").split(" ")
        if not len(names):
            exit()
    if not os.path.exists("src/pages"):
        os.system("mkdir src/pages")
        os.system("touch src/pages/index.js")
    for name in names:
        if name == name.capitalize():
            lname = name.lower()
            print(lname)
            if not os.path.exists("src/pages/%s" % lname):
                os.system("mkdir src/pages/%s" % lname)
                utils.add_import(name, "./%s" % lname, "src/pages/%s/index.js" % lname)
                utils.add_import(name, "./%s" % lname, "src/pages/index.js")
                fs = open("src/pages/%s/%s.js" % (lname, lname), "w")
                fs.write(utils.create_component(name))
                fs.close()