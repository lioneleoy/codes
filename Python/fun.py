#!/usr/bin/python
print "hello"
str=raw_input("what is your name :")
operation=raw_input("Hello %s, how may I help you?? "%str)
if "add" in operation:
    terms=raw_input("how many numbers involved :")
    print terms
    x=0
    total=0
    i=0
    for i in range(0,int(terms)):
        x=raw_input("enter the value of term %s: "%i)
        total=total+int(x)
        i=i+1
    print "the total value is =%s"%total
elif "sub" in operation:
    terms=raw_input("how many numbers involved :")
    print terms
    x=0
    total=0
    i=0
    for i in range(0,int(terms)):
        x=raw_input("enter the value of term %s: "%i)
        total=int(x)-total
        i=i+1
    print "the value is =%s"%total
