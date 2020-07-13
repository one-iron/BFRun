from flask_request_validator_custom import (
    PATH,
    GET,
    Param,
    MaxLength,
    validate_params,
)


def create_video_endpoints(app, video_service):

    @app.route("/categories", methods=["GET"])
    def get_categories():
        try:
            category_response = video_service.get_category_lists()
            return category_response, 200
            
        except Exception as e:
            return {"message": str(e)}, 400


    @app.route("/video/<int:video_id>", methods=["GET"])
    @validate_params(
        Param('video_id', PATH, int)
    )
    def get_video_detail(video_id):
        try:
            detail_get = video_service.get_video_detail(video_id)
            if detail_get is 0:
                return {'message': f'CAN NOT FIND VIDEO ID {video_id}'}, 400
            else:
                video_detail, video_playlist = detail_get

            return {"video_detail": video_detail, "video_playlist": video_playlist}, 200

        except Exception as e:
            return {"message": str(e)}, 400

    @app.route("/videos", methods=["GET"])
    @validate_params(
        Param('contents_types_id', GET, str, required=False, rules=[MaxLength(1)]),
        Param('stack_id', GET, list, required=False, rules=[MaxLength(5)]),
        Param('channels_id', GET, list, required=False, rules=[MaxLength(18)]),
    )
    def get_video_lists(*args):
        try:           
            params = {}
            params["contents_types_id"] = args[0] # 콘텐츠 타입
            params["stack_id"]          = args[1] # 스택
            params["channels_id"]       = args[2] # 채널

            video_list_response = video_service.get_video_lists(params)
            return {"videos" : video_list_response}, 200

        except Exception as e:
            return {"message": e}, 400


    @app.route("/main", methods=["GET"])
    def recommand_video_controller():
        try:
            videos = video_service.recommand_video_service()
            return {"general": videos[0], "front": videos[1], "back": videos[2]}, 200

        except Exception as e:
            return {"message": e}, 400
