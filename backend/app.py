from flask import Flask
from flask_cors import CORS

from user.model       import UserDao
from user.controller  import create_user_endpoints
from user.service     import UserService

from video.model import VideoDao
from video.service import VideoService
from video.controller import create_video_endpoints


def create_app(test_config=None):

    app = Flask(__name__)
    app.debug = True
    app.config["JSON_SORT_KEYS"] = False
    app.config.from_pyfile("config.py")
    CORS(app, resources={r'*': {'origins': '*'}})

    user_dao = UserDao()
    video_dao = VideoDao()

    user_service = UserService(user_dao)
    video_service = VideoService(video_dao)

    create_user_endpoints(app, user_service)
    create_video_endpoints(app, video_service)

    return app
