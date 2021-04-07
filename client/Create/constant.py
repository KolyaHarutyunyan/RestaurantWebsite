import os
import generate
import utils


def run(names):
    if not os.path.exists("src"):
        # os.system("mkdir src")
        generate.run()
        exit()

    if not len(names):
        names = input("please type constants names : ").split(" ")
        if not len(names):
            exit()
    if not os.path.exists("src/constants"):
        os.system("mkdir src/constants")
        os.system("touch src/constants/index.js")

    for name in names:
        utils.add_import(name, "./%s" % name, "src/constants/index.js")
        os.system("touch src/constants/%s.js" % name)
        fs = open("src/constants/%s.js" % name, "w")
        fs.write("export const %s" % name)
        fs.close()
