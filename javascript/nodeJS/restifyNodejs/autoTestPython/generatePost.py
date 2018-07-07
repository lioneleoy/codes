import requests
from requests.auth import HTTPBasicAuth
import json

header = {'content-type': 'application/json'}
names = ['lionel', 'leo', 'nisha']
age = [27,26,25]
sex = ['M','M','F']
url = "http://localhost:8080/user"

def createUsers():
    try:
        n = len(age)
        for i in range(0,n):
            data = json.dumps({'name' : names[i], 'age': age[i], 'sex': sex[i]})
            print data
            requests.post(url ,data=data, headers=header)
            print requests.status_codes
    except Exception,e:
        print e

if __name__ == '__main__':
    createUsers()