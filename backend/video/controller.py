import pymysql


def create_video_endpoints(app, video_service):
    @app.route("/categories", methods=["GET"])
    def get_categories():
        category_response = video_service.get_category_lists()
        return category_response, 200

