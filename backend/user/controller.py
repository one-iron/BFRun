from flask import request

def create_user_endpoints(app, user_service):

    @app.route("/login", methods=["POST"])
    def login():
        try:
            user = request.json
            print(user)
            token = user_service.google_login(user)
            return {'token' : token}, 200

        except KeyError:
            return {'message' : 'KEY ERROR'}, 400