from flask import request
from flask_request_validator import PATH, FORM, Param, Pattern, validate_params

from flask_request_validator import (
    PATH,
    Param,
    validate_params
)

def create_video_endpoints(app, video_service):

    @app.route("/categories", methods=["GET"])
    def get_categories():
        category_response = video_service.get_category_lists()
        return category_response, 200

    @validate_params(
        Param('video_id', PATH, int, required=True)
    )
    @app.route("/video/<int:video_id>", methods=["GET"])
    def get_video_detail(video_id):
        try:
            video_detail, video_playlist = video_service.get_video_detail(video_id)
            return {"video_detail": video_detail, "video_playlist": video_playlist}, 200

        except Exception as e:
            return {"message": e}, 400

    @app.route("/videos", methods=["GET"])
    def get_video_lists():
        try:
            params = request.args
            video_list_response = video_service.get_video_lists(params)
            return video_list_response, 200

        except Exception as e:
            return {"message": e}, 400

    @app.route('/main', methods=['GET'])
    def recommand_video_controller():
        try:
            videos = video_service.recommand_video_service()
            return { 'general' : videos[0],
                     'front'   : videos[1],
                     'back'    : videos[2]}, 200

        except Exception as e:
            return {"message": e}, 400
