import os
import generate
import utils


def run(args):
    if not os.path.exists("src"):
        # os.system("mkdir src")
        generate.run()
        exit()

    if not len(args):
        fn = input("please type parent fragment name : ")
        if not os.path.exists("src/fragments/%s" % fn):
            exit()

    else:
        fn = args[0]

    if not len(args[1:]):
        names = input("please type core components names : ").split(" ")
        if not len(names):
            exit()
    else:
        names = args[1:]

    for name in names:
#         if name == name.capitalize():


        utils.add_import(name.capitalize(), "./%s" % name, "src/fragments/%s/core/index.js" % fn)
        fs = open("src/fragments/%s/core/%s.js" % (fn, name), "w")
        fs.write(utils.create_component(name.capitalize()))
        fs.close()
