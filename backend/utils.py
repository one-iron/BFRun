import jwt

from functools import wraps
from flask     import request, g
from config    import SECRET_KEY, ALGORITHM

def authorize(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        """
        로그인 데코레이터
        """

        if not 'Authorization' in request.headers:
            return {'message': 'ACCESS NOT ALLOWED'}, 401

        access_token = request.headers.get('Authorization')
        try:
            payload = jwt.decode(access_token, SECRET_KEY['secret'], ALGORITHM['algorithm'])

        except jwt.InvalidTokenError:
            return {'message': 'INVALID TOKEN'}, 400

        g.user = payload['user_id']

        return f(*args, **kwargs)

    return decorated_function