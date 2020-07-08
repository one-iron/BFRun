from flask                   import request
from flask_request_validator_custom import (
    GET,
    JSON,
    Param,
    validate_params
)

def create_user_endpoints(app, user_service):

    @app.route("/login", methods=["POST"])
    @validate_params(
        Param('id', JSON, str),
        Param('token', JSON, str)
    )
    def login(*args):
        try:
            user = request.json
            response = user_service.google_login(user)
            return response

        except Exception as e:
            return {'message' : f'{e}'}, 400