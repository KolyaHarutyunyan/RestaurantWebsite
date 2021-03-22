import os
import sys
import generate
import fragment

if len(sys.argv) == 1:
    generate.run()
    exit()

if sys.argv[1] == "-r":
    os.system("rm -R src")

if sys.argv[1] == "-f":
    fragment.run(sys.argv[2:])



