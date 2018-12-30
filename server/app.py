from exchangelib import Credentials, Account, Configuration, DELEGATE, IMPERSONATION, RoomList
from exchangelib.services import GetRooms
from flask import Flask
from flask import request
from settings import config #此处设定文件不作上传
import json


credentials = Credentials(config["admin_email"], config["admin_password"])

config = Configuration(server='outlook.office365.com', credentials=credentials)

account = Account(
    primary_smtp_address='admin@agoraacademy.onmicrosoft.com', 
    credentials=credentials, 
    autodiscover=False,
    config=config,
    access_type=DELEGATE
    )

rooms = GetRooms(protocol=account.protocol).call(
    roomlist=RoomList(email_address='NEO-CResourcesList@agoraacademy.onmicrosoft.com')
)


app = Flask(__name__)
if __name__ == '__main__':
    app.run(
		debug=True,
		host='0.0.0.0'
	)

@app.route('/')
def hello_world():
    res = {}
    for room in rooms:
        room_account = Account(
            primary_smtp_address=room.email_address, 
            credentials=credentials, 
            config=config
        )
        res["%s" % room_account] = []
        for item in room_account.calendar.all().order_by('start'):
            res["%s" % room_account].append({
                "start": item.start,
                "subject": item.subject,
                "end": item.end
            })
    
    return json.dumps(dict(res))
