import os
import sys
import generate
import fragment
import component
import help
import constant
import core_component
import page

if len(sys.argv) == 1:
    generate.run()
    exit()

if sys.argv[1] == "-f":
    fragment.run(sys.argv[2:])

if sys.argv[1] == "-c":
    component.run(sys.argv[2:])

if sys.argv[1] == "-cx":
    print("creating context")

if sys.argv[1] == "-cn":
    constant.run(sys.argv[2:])

if sys.argv[1] == "-cc":
    core_component.run(sys.argv[2:])

if sys.argv[1] == "-u":
    print("creating util")

if sys.argv[1] == "-p":
    page.run(sys.argv[2:])

if sys.argv[1] == "-s":
    print("creating store")

if sys.argv[1] == "-r":
    os.system("rm -R src")

if sys.argv[1] == "-h":
    help.run()
