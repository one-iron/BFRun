import os
import sys

BASE_DIR = os.path.dirname(os.path.abspath("backend"))
sys.path.extend([BASE_DIR])

import pytest
import json
import config

from app import create_app

@pytest.fixture
def api():
    app = create_app(config.test_config)
    app.config['TESTING'] = True
    api = app.test_client()

    return api

def test_login(api):
    new_user = {
        "id": "123123123",
        "token" : "123123123"
    }

    response = api.post(
        "/login",
        data=json.dumps(new_user),
        content_type="application/json"
    )
    assert response.status_code == 400