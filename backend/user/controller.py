def create_user_endpoints(app, user_service):
    @app.route("/test", methods=["GET"])
    def test():
        response = user_service.test()
        return {"message": response}, 200
