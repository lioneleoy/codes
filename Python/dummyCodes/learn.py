#!/usr/bin/python


str="wipro"
print str
print str[0]
print 2* str

for x in str:
    if 'r' not in x:
        continue
    else:
        print x
