import os
import sys

class iron:
    def __init__(self):
        pass
    def __repr__(self):
        pass
    pass

def openConfigFile(string addr):
    try:
        config = open(addr, mode = 'r', enconding = 'utf-8')
    except expression as e:
        print("Invalid address")
        pass
#Internal Interface of reading irons' config from .config file#
def readFromConfig(file config):
    #Format Assertion
    assert ".config" in config or ".csv" in config or ".txt" in config, "Invalid configuration format."

    pass

#need a taple or list of iron's info
def readFromPage(iron[] ironList):
    pass


def if __name__ == "__main__":
    pass