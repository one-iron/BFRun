from flask                   import request
from flask_request_validator import (
    GET,
    Param,
    validate_params
)

def create_user_endpoints(app, user_service):

    @validate_params(
        Param('id', GET, str, required=True),
        Param('token', GET, str, required=True)
    )
    @app.route("/login", methods=["POST"])
    def login():
        try:
            user = request.json

            token = user_service.google_login(user)
            return {'token' : token}, 200

        except KeyError:
            return {'message' : 'KEY ERROR'}, 400