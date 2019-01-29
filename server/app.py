from exchangelib import Credentials, Account, Configuration, DELEGATE, RoomList
from exchangelib.services import GetRooms
from flask import Flask
from flask import request
from . import Kiosk_settings  # 此处设定文件不作上传
import requests
import json


credentials = Credentials(
    Kiosk_settings.EWS_config["admin_email"], 
    Kiosk_settings.EWS_config["admin_password"])

config = Configuration(server='outlook.office365.com', credentials=credentials)

account = Account(
    primary_smtp_address='admin@agoraacademy.onmicrosoft.com',
    credentials=credentials,
    autodiscover=False,
    config=config,
    access_type=DELEGATE
)

rooms = GetRooms(protocol=account.protocol).call(
    roomlist=RoomList(
        email_address='NEO-CResourcesList@agoraacademy.onmicrosoft.com')
)


app = Flask(__name__)
if __name__ == '__main__':
    app.run(
        debug=True,
        host='0.0.0.0'
    )


@app.route('/')
def hello_world() -> str:
    res: dict = {}
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



def getOpenID(code:str) -> str:
    def post() -> str:
        try:
            RequestURL: str = "https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code" % (
                Kiosk_settings.Weixin_config['wx_app_id'], 
                Kiosk_settings.Weixin_config['wx_app_secret'], 
                code
            )
            RequestToWeixin = requests.get(RequestURL)
            return  RequestToWeixin.json()["openid"]
        except Exception as e:
            print(e)
            return json.dumps({
                "code": "400",
                "message": "unable to get OPENID"
            })
        else:
            return json.dumps({
                "code": "500",
                "message": "Internal Error"
            })
    if request.method == 'POST':
            return post()
    return json.dumps({
            "code": "500",
            "message": "Internal Error"
    })
    
@app.route('/test')
def test() -> None:
    print(request)
