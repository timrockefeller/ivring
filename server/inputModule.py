import os
import sys

class iron:
    #TODO How to manage number interface
    argName=["Fe2O3","Al2O3","SiO2","S","C","MgO2"]
    def __init__(self,string[] rawList):
        self.name,self.arg,self.price = rawList[0],[double(elem) for elem in [rawList[i] for i in range(1,len(rawList)-1)]],rawList[len(rawList)-1]
        #MOVE CONVERTING
        #INITIAL COULD USE ONLY RAW FORM
    def __repr__(self):
        print("Iron Name: {0},Iron Stat: {1},Iron Price: {2}".format(self.name,self.arg,self.price))
        pass
    pass

def openConfigFile(string addr):
    try:
        config = open(addr, mode = 'r', enconding = 'utf-8')
        return config
    except expression as e:
        print("Invalid Address")
#Internal Interface of reading irons' config from .config file#
def readFromConfig(file config):
    #Format Assertion
    ironList = []
    assert ".config" in config or ".csv" in config or ".txt" in config, "Invalid Configuration Format."
    for line in config.readlines():
        lineIron = line.split()
        #FORMAT [name,arg1,arg2,arg3,arg4,arg5,arg6,price]
        #lineReformat = [lineIron[0],[lineIron[i] for i in range(1,argNumber+1)],lineIron[argNumber+1]]
        assert lend(lineIron) == argNumber + 2, "Wrong Size of Configuration."
        tempIron = iron(lineReformat)
        ironList.append(tempIron)       
    pass

#need a taple or list of iron's info using raw string
def readFromPage(string[] ironStringList, argNumber = 6):
    ironList = []
    for line in ironStringList:
        lineIron = line.split()
        #FORMAT [name,arg1,arg2,arg3,arg4,arg5,arg6,price]
        #lineReformat = [lineIron[0],[lineIron[i] for i in range(1,argNumber+1)],lineIron[argNumber+1]]
        assert lend(lineIron) == argNumber + 2, "Wrong Size of Configuration."
        tempIron = iron(lineReformat)
        ironList.append(tempIron)
    return ironList


def readCommandFromLine():
    comm = input()
    if comm = '-c'
        ironList = readFromConfig(openConfigFile)
    elif comm = '-r'
        ironList = readF


# def if __name__ == "__main__":
#     pass