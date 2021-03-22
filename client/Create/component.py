import os
import generate
import utils

def run(names):
    if not os.path.exists("src"):
        # os.system("mkdir src")
        generate.run()
        exit()

    if not len(names):
        names = input("please type components names : ").split(" ")
        if not len(names):
            exit()
    if not os.path.exists("src/components"):
        os.system("mkdir src/components")
        os.system("touch src/components/index.js")
    for name in names:
        if name == name.capitalize():
            lname = name.lower()
            print(lname)
            if not os.path.exists("src/components/%s" % lname):
                os.system("mkdir src/components/%s" % lname)
                utils.add_import(name, "./%s" % lname, "src/components/%s/index.js" % lname)
                utils.add_import(name, "./%s" % lname, "src/components/index.js")
                fs = open("src/components/%s/%s.js" % (lname, lname), "w")
                fs.write(utils.create_component(name))
                fs.close()