import os
import sys

BASE_DIR = os.path.dirname(os.path.abspath("backend"))
sys.path.extend([BASE_DIR])

import pytest
import config

from app import create_app

@pytest.fixture
def api():
    app = create_app(config.test_config)
    app.config['TESTING'] = True
    api = app.test_client()

    return api

def test_get_wrong_video(api):
  response = api.get(
    "/video/",
    content_type="application/json"
  )
  assert response.status_code == 404

# 비디오 상세
def test_get_video(api):
    response = api.get(
        "/video/2",
        content_type="application/json"
    )
    assert response.json == {
      "video_detail": {
        "channel_id": 1,
        "channel_name": "생활코딩",
        "channel_profile": "https://yt3.ggpht.com/a/AATXAJxvRQAUhMMDMMAh3cofTIx1PupaB2fBAQAfOZFc=s100-c-k-c0xffffffff-no-rj-mo",
        "title": "React class vs function style - 2. 수업의 목표",
        "created_at": "2020-02-11",
        "view": 1874,
        "description": "React에서 콤포넌트를 작성하는 방법은 두가지입니다. \n\n클래스 스타일과 함수 스타일로 코딩하는 것입니다. \n\n클래스 스타일은 모든 기능을 다 사용할 수 있지만, 복잡합니다. \n함수 스타일은 제한된 기능만 사용할 수 있지만, 단순합니다. \n\n최근 함수 스타일에 hook 기능이 추가되면서 함수 스타일로 클래스 스타일의 기능성에 버금가는 콤포넌트를 만들 수 있게 되었습니다. \n\n이 수업에서는 클래스와 함수 스타일로 동일한 콤포넌트를 만들어가면서 어떤 차이점이 있는지를 비교해가며 콤포넌트를 작성하는 방법을 배우는 수업입니다. \n\n또 최근 도입된 hook을 어떻게 사용하는지도 알려드립니다. \n\n이 수업은 React 수업에 의존하고 있습니다. 모르신다면 React 수업을 먼저 보시고 참여하실 것을 권합니다. \nhttps://opentutorials.org/module/4058\n\n모든 수업은 아래 주소에 있습니다. \nhttps://opentutorials.org/module/4600\n\n전체 지식의 지도는 아래 주소에 있습니다. \nhttps://seomal.org/",
        "video_url": "https://www.youtube.com/watch?v=MZjT_P5HElw&list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj&index=3&t=0s",
        "stack_id": 6,
        "playlist_id": 1,
        "contents_types_id": 1
      },
      "video_playlist": [
        {
          "id": 1,
          "title": "React class vs function style - 1. 수업소개",
          "url": "https://www.youtube.com/watch?v=iY_vmP-Q3Ak&list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj&index=2&t=0s",
          "created_at": "2020-02-11",
          "playlist_id": 1
        },
        {
          "id": 2,
          "title": "React class vs function style - 2. 수업의 목표",
          "url": "https://www.youtube.com/watch?v=MZjT_P5HElw&list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj&index=3&t=0s",
          "created_at": "2020-02-11",
          "playlist_id": 1
        },
        {
          "id": 3,
          "title": "React class vs function style - 3.1. 클래스에서 state 사용법",
          "url": "https://www.youtube.com/watch?v=4bTUicgjq5I&list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj&index=4&t=0s",
          "created_at": "2020-02-11",
          "playlist_id": 1
        },
        {
          "id": 4,
          "title": "React class vs function style - 3.2. 함수에서 state 사용법 hook",
          "url": "https://www.youtube.com/watch?v=R6GPIWG7O9s&list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj&index=5&t=0s",
          "created_at": "2020-02-11",
          "playlist_id": 1
        },
        {
          "id": 5,
          "title": "React class vs function style - 4.1. 클래스에서 라이프 사이클 구현 하기",
          "url": "https://www.youtube.com/watch?v=VgbMW2f5laM&list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj&index=6&t=0s",
          "created_at": "2020-02-11",
          "playlist_id": 1
        },
        {
          "id": 6,
          "title": "React class vs function style - 4.2.1. 함수에서 라이프 사이클 구현 하기 - 실습준비",
          "url": "https://www.youtube.com/watch?v=cJFLZUV4iLs&list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj&index=7&t=0s",
          "created_at": "2020-02-11",
          "playlist_id": 1
        },
        {
          "id": 7,
          "title": "React class vs function style - 4.2.2. 함수에서 라이프 사이클 구현 하기 - useEffect",
          "url": "https://www.youtube.com/watch?v=LgEJlKfHJW0&list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj&index=8&t=0s",
          "created_at": "2020-02-11",
          "playlist_id": 1
        },
        {
          "id": 8,
          "title": "React class vs function style - 4.2.3. 함수에서 라이프 사이클 구현 하기 - clean up",
          "url": "https://www.youtube.com/watch?v=s_i7yi8W3z8&list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj&index=9&t=0s",
          "created_at": "2020-02-11",
          "playlist_id": 1
        },
        {
          "id": 9,
          "title": "React class vs function style - 4.2.4. 함수에서 라이프 사이클 구현 하기 - skipping effect",
          "url": "https://www.youtube.com/watch?v=d-UtrSSj5gA&list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj&index=10&t=0s",
          "created_at": "2020-02-11",
          "playlist_id": 1
        },
        {
          "id": 10,
          "title": "React class vs function style - 5. 총정리 겸 수업을 마치며",
          "url": "https://www.youtube.com/watch?v=83kE6cf0Cqk&list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj&index=11&t=0s",
          "created_at": "2020-02-11",
          "playlist_id": 1
        }
      ]
    }

if __name__ == '__main__':
  pytest.main()