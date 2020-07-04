from flask import request

def create_user_endpoints(app, user_service):

    @app.route("/login", methods=["POST"])
    def login():

        user = request.json
        token = user_service.google_login(user)
        return {'token' : token}, 200

