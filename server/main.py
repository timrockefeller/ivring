
import pulp as p
import sys
import numpy as np

#IN:config -> irons' configuratino
#IN:ini -> ??kind of useless yet?? -> opt range mod
#PASS: conf -> alg -> numpy list -> LP -> reformat ->report

#@author: Cyame
#@title: iron perception LP
#storage
class iron:
    def __init__(self,line):
        self.name = line[0]
        self.arg1 = line[1]
        self.arg2 = line[2]
        self.arg3 = line[3]
        self.arg4 = line[4]
        self.arg5 = line[5]
        self.arg6 = line[6]
        self.perPrice = line[7]
    def __str__(self):
        return self.name +' '+ self.arg1 + ' ' + self.arg2 + ' ' + self.arg3 + ' ' + self.arg4 + ' ' + self.arg5 + ' ' + self.arg6 + ' ' + self.perprice

# read module        
def read_config():
    if(len(sys.argv)<=2 or len(sys.argv[1])=='-h'):
        print("HELPER:\n\nArrange_LP.py [Command] [File]\n")
        print("Command:\n-i Reload initial file.\n-h Print this helper note.\n-m Manually input your configuration. \n-r Read your config file.")
        print("\nFile:\nYour file with full path or current path.")
        exit()
    file_name = sys.argv[0]
    command = sys.argv[1]
    if(len(sys.argv) == 3):
        config_addr = sys.argv[2]
    else:
        config_addr = None
    assert file_name == 'Arrange_LP.py', "INVALID FILE NAME."
    assert len(sys.argv) == 3, "TOO MANY ARGUMENTS."
    conf = []
    ini = []
    if command == '-i':
        ini = load_ini(config_addr)
    elif command == '-m':
        conf = manual_config()
    elif command == '-r':
        assert '.config' in config_addr, "INVALID CONFIG FILE."
        if config_addr:
            infile = open(config_addr, mode = 'r')
            for line in infile.readlines():
                if line != '\n':
                    conf.append(iron(line.split()))
            infile.close()
        while len(conf)<10:
            conf.append(iron(["NULL",0,0,0,0,0,0,999999]))
    # print(sys.argv)
    return conf,ini

# write module
def manual_config():
    number = input("How many kinds of iron: ")
    conf = []
    
    for i in range(number):
        name = input("Name: ")
        arg1 = input("Fe2O3: ")
        arg2 = input("Al2O3: ")
        arg3 = input("SiO2: ")
        arg4 = input("MnO2: ")
        arg5 = input("MgO2: ")
        arg6 = input("S: ") 
        perPrice = input("perPrice: ")
        conf.append(iron([name,arg1,arg2,arg3,arg4,arg5,arg6,perPrice]))
        
        
    return conf


def write_report(): 
    
    com = input("Do you want to save this report?[Y/n]")
    if com == 'y' or com == 'Y':
        report = open("report.txt",'w+')
    pass

#initial
def load_ini(config_addr):
    inifile = open(config_addr, mode = 'r')
    ini=[]
    for line in infile.readlines():
        if line != '\n':
            ini.append(line.split())
    inifile.close()
    return ini

def algorithm(conf,ini):
    
    LowestPrice = p.LpProblem("Problem", p.LpMinimize)
    #Var
    m0 = p.LpVariable(conf[0].name, lowBound = 0, upBound = 1)
    m1 = p.LpVariable(conf[1].name, lowBound = 0, upBound = 1)
    m2 = p.LpVariable(conf[2].name, lowBound = 0, upBound = 1)
    m3 = p.LpVariable(conf[3].name, lowBound = 0, upBound = 1)
    m4 = p.LpVariable(conf[4].name, lowBound = 0, upBound = 1)
    m5 = p.LpVariable(conf[5].name, lowBound = 0, upBound = 1)
    m6 = p.LpVariable(conf[6].name, lowBound = 0, upBound = 1)
    m7 = p.LpVariable(conf[7].name, lowBound = 0, upBound = 1)
    m8 = p.LpVariable(conf[8].name, lowBound = 0, upBound = 1)
    m9 = p.LpVariable(conf[9].name, lowBound = 0, upBound = 1)
    #Obj
    LowestPrice.setObjective(m0 * float(conf[0].perPrice)+m1 * float(conf[1].perPrice)+m2 * float(conf[2].perPrice)+m3 * float(conf[3].perPrice)+m4 * float(conf[4].perPrice)+m5 * float(conf[5].perPrice)+m6 * float(conf[6].perPrice)+m7 * float(conf[7].perPrice)+m8 * float(conf[8].perPrice)+m9 * float(conf[9].perPrice))
    ##???WHY INT?? cuz your input is raw string#
    #Constraints
    LowestPrice += m0+m1+m2+m3+m4+m5+m6+m7+m8+m9 == 1
    #?sum to 80%
    
    #load
    #>ini(price)
    #>read_config(item)
    print(LowestPrice)
    status = p.solvers.GLPK_CMD().actualSolve(LowestPrice)
    #LpSolverDefault.msg = 1
    print(p.LpStatus[status])
    
    print(p.value(m0),p.value(m1),p.value(m2),p.value(m3),p.value(m4),p.value(m5),p.value(m6),p.value(m7),p.value(m8),p.value(m9),p.value(LowestPrice.objective))
    
    
conf,ini = read_config()
algorithm(conf,ini)
