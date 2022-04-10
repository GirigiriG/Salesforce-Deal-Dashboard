from ast import If
import os
import sys


# sfdx force: auth: jwt: grant - u gideongirigiri@gmail.com - f cert/server.key - i 3MVG9dZJodJWITSugONOAAWoxjDmR23_N0fta65n9ldUIhyCZuqxERnOAj8BOrsMJndLMFXL5s.p4SC7.uWd5\n - r https: // login.salesforce.com

# result = os.system("sfdx force:auth:jwt:grant -u gideongirigiri@gmail.com -f cert/server.key -i 3MVG9dZJodJWITSugONOAAWoxjDmR23_N0fta65n9ldUIhyCZuqxERnOAj8BOrsMJndLMFXL5s.p4SC7.uWd5 -r https://login.salesforce.com")


# os.system(
#     "sfdx force:apex:test:run -u gideongirigiri@gmail.com --outputdir test_result")

# f = open("./test_result/test-run-id.txt")
# reportId = f.read()

# code = os.system("sfdx force:apex:test:report -i " +
#                  reportId + " -u gideongirigiri@gmail.com --resultformat human")

print(os.getenv("USERNAME"))
# if code == 0:
#     sys.exit(1)
