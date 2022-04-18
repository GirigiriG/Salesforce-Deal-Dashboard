from ast import If
import os
import sys

result = os.system("sfdx force:auth:jwt:grant -u gideongirigiri@gmail.com -f cert/server.key -i 3MVG9dZJodJWITSugONOAAWoxjDmR23_N0fta65n9ldUIhyCZuqxERnOAj8BOrsMJndLMFXL5s.p4SC7.uWd5 -r https://login.salesforce.com")

isConverted = os.system(
    "sfdx force:source:convert -r force-app -d deployable")

os.system("sfdx force:config:set defaultusername='gideongirigiri@gmail.com'")
if isConverted != 0:
    print("unabled to convert: bad metadata")
    sys.exit(1)

isDeployed = os.system("sfdx force:mdapi:deploy --verbose -d deployable -w 1")

if isDeployed != 0:
    print("deployment failed")
    sys.exit(1)

os.system(
    "sfdx force:apex:test:run -u gideongirigiri@gmail.com --outputdir test_result")

f = open("./test_result/test-run-id.txt")
reportId = f.read()

code = os.system("sfdx force:apex:test:report -i " +
                 reportId + " -u gideongirigiri@gmail.com --resultformat human -w 2")

if code != 0:
    sys.exit(1)
