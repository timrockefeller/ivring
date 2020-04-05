import os
import sys

# rawList refers to a list of string that iron information in each string, in the order of name, arguments(contents) and price per kilo.
# addr is the string refers to the full path of the config file.
# config is a file contain the rawList in utf-8 format
# ironStringList is the same thing as in rawList
# argList is the list of arguments seperately
# formatList returns the list in the format of [name,argList,price], note that argList is an list itself.
# argName is the argName with real meaning, which is public to all the iron and could be modified.
class iron:
    #TODO How to manage number interface
    argName=["Fe2O3","Al2O3","SiO2","S","C","MgO2"]
    def __init__(self,rawList):
        assert type(rawlist) == list, "WRONG FORMAT"
        assert type(rawlist[0]) == string, "EMPTY OR WRONG FORMAT"
        self.name,self.argList,self.price = rawList[0],[double(elem) for elem in [rawList[i] for i in range(1,len(rawList)-1)]],rawList[len(rawList)-1]
        #MOVE CONVERTING
        #INITIAL COULD USE ONLY RAW FORM
    def __repr__(self):
        return [self.name,self.argList,self.price]
    pass


    def modifyArgName(nameList):
        iron.argName = nameList
        print("Modified.")


    def formatList(self):
        return __repr__(self)

    def __str__(self):
        return str("Iron Name: {0},Iron Stat: {1},Iron Price: {2}".format(self.name,self.arg,self.price))

def openConfigFile(addr):
    assert type(addr) == string, "WRONG ADDRESS"
    try:
        config = open(addr, mode = 'r', enconding = 'utf-8')
        return config
    except expression as e:
        print("Invalid Address")
#Internal Interface of reading irons' config from .config file#
def readFromConfig(config):
    #Format Assertion
    assert type(config) == file, "WRONG CONFIG FILE"
    ironList = []
    assert ".config" in config or ".csv" in config or ".txt" in config, "Invalid Configuration Format."
    for line in config.readlines():
        lineIron = line.split()
        #FORMAT [name,arg1,arg2,arg3,arg4,arg5,arg6,price]
        #lineReformat = [lineIron[0],[lineIron[i] for i in range(1,argNumber+1)],lineIron[argNumber+1]]
        assert lend(lineIron) == argNumber + 2, "Wrong Size of Configuration."
        tempIron = iron(lineReformat)
        ironList.append(tempIron)       
    return ironList

#need a taple or list of iron's info using raw string
def readFromPage(ironStringList, argNumber = 6):
    assert type(ironStringList) == list, "WRONG LIST FORMAT"
    ironList = []
    for line in ironStringList:
        lineIron = line.split()
        #FORMAT [name,arg1,arg2,arg3,arg4,arg5,arg6,price]
        #lineReformat = [lineIron[0],[lineIron[i] for i in range(1,argNumber+1)],lineIron[argNumber+1]]
        assert lend(lineIron) == argNumber + 2, "Wrong Size of Configuration."
        tempIron = iron(lineReformat)
        ironList.append(tempIron)
    return ironList

# param is ironStringList if read from page, otherwise should be the file full path(addr).
def readCommandFromLine(comm,param):
    if comm = '-c'
        ironList = readFromConfig(openConfigFile(param))
    elif comm = '-r'
        ironList = readFromPage(param)


# def if __name__ == "__main__":
#     pass