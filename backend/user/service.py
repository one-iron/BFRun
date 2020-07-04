import jwt
import json
import requests

from config import SECRET_KEY, ALGORITHM

class UserService:
    def __init__(self, user_dao):
        self.user_dao = user_dao

    def google_login(self, user):

        GOOGLE_AUTH_URL = 'https://oauth2.googleapis.com/tokeninfo?id_token='
        CORRECT_ISS_LIST = ['accounts.google.com', 'https://accounts.google.com']

        google_id = user['id']
        google_token = user['token']

        token_data = json.loads(requests.get(GOOGLE_AUTH_URL + google_token).text)

        if (token_data['iss'] not in CORRECT_ISS_LIST) or (
                token_data['sub'] != google_id):
            return {'message': 'MODIFIED_TOKEN'}, 401

        user_id = self.user_dao.google_login(user)
        print(user_id)

        if user_id == 0:
            user_id = self.user_dao.get_user(google_id)

        token = jwt.encode(
            {'id': user_id}, SECRET_KEY['secret'], algorithm= ALGORITHM['algorithm']
        ).decode('utf-8')

        return token
