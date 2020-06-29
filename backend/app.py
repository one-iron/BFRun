from flask import Flask
from flask_cors import CORS


def create_app(test_config=None):
    app = Flask(__name__)
    app.debug = True
    app.config["JSON_SORT_KEYS"] = False
    app.config.from_pyfile("config.py")
    CORS(app, resources={r"*": {"origins": "*"}})

    return app
