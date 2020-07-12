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

# 카테고리 API [GET]
def test_get_categories(api):
  response = api.get(
    "/categories",
    content_type="application/json"
  )
  assert response.json == {
      "content_types": [
      {
        "id": 1,
        "name": "강의"
      },
      {
        "id": 2,
        "name": "꿀팁"
      },
      {
        "id": 3,
        "name": "핵심개념"
      },
      {
        "id": 4,
        "name": "동기부여"
      }
    ],
    "stacks": [
      {
        "general_stacks": [
          {
            "id": 14,
            "name": "Apollo",
            "color_code": "#112A47"
          },
          {
            "id": 16,
            "name": "AWS",
            "color_code": "#08132B"
          },
          {
            "id": 17,
            "name": "Database",
            "color_code": "#036172"
          },
          {
            "id": 19,
            "name": "Git",
            "color_code": "#08132B"
          },
          {
            "id": 20,
            "name": "Linux",
            "color_code": "#08132B"
          },
          {
            "id": 21,
            "name": "Etc",
            "color_code": "#08132B"
          }
        ]
      },
      {
        "frontend_stacks": [
          {
            "id": 1,
            "name": "HTML",
            "color_code": "#E55126"
          },
          {
            "id": 2,
            "name": "CSS",
            "color_code": "#0C73B8"
          },
          {
            "id": 3,
            "name": "JavaScript",
            "color_code": "#E5A228"
          },
          {
            "id": 5,
            "name": "TypeScript",
            "color_code": "#007ACC"
          },
          {
            "id": 6,
            "name": "React",
            "color_code": "#5ED4F4"
          },
          {
            "id": 7,
            "name": "React Native",
            "color_code": "#5ED4F4"
          },
          {
            "id": 9,
            "name": "Vue",
            "color_code": "#3FB37F"
          },
          {
            "id": 12,
            "name": "Angular",
            "color_code": "#BE002E"
          },
          {
            "id": 15,
            "name": "Webpack",
            "color_code": "#8AD0F4"
          }
        ]
      },
      {
        "backend_stacks": [
          {
            "id": 4,
            "name": "Python",
            "color_code": "#396C97"
          },
          {
            "id": 8,
            "name": "Django",
            "color_code": "#092D1F"
          },
          {
            "id": 10,
            "name": "Node.js",
            "color_code": "#7CB801"
          },
          {
            "id": 11,
            "name": "Flask",
            "color_code": "#000000"
          },
          {
            "id": 13,
            "name": "GraphQL",
            "color_code": "#DF34A6"
          },
          {
            "id": 18,
            "name": "SQL",
            "color_code": "#008062"
          }
        ]
      }
    ],
    "channels": [
      {
        "id": 1,
        "name": "생활코딩"
      },
      {
        "id": 2,
        "name": "얄팍한 코딩사전"
      },
      {
        "id": 3,
        "name": "김왼손의 왼손코딩"
      },
      {
        "id": 4,
        "name": "코딩하는 테크보이 워니"
      },
      {
        "id": 5,
        "name": "드림코딩 by 엘리"
      },
      {
        "id": 6,
        "name": "노마드 코더 Nomad Coders"
      },
      {
        "id": 7,
        "name": "Minjun Kim"
      },
      {
        "id": 8,
        "name": "김버그 Kimbug"
      },
      {
        "id": 9,
        "name": "조코딩 JoCoding"
      }
    ]
  }

# def test_get_contents_types_vidoes(api):
#   response = api.get(
#     "/videos?contents_types_id=1",
#     content_type="application/json"
#   )

#   assert response.json == {
#     "videos": [
#         [
#           {
#             "video_id": 161,
#             "title": "Linux - IO Redirection3 : append",
#             "created_at": "2016-11-25",
#             "url": "https://www.youtube.com/watch?v=l39yXacR1_s&list=PLuHgQVnccGMBT57a9dvEtd6OuWpugF9SH&index=19&t=0s",
#             "channel_id": 1,
#             "channel_name": "생활코딩"
#           },
#           {
#             "video_id": 208,
#             "title": "Linux - Loginless 2 : rsync",
#             "created_at": "2016-12-14",
#             "url": "https://www.youtube.com/watch?v=Y16VCnP382I&list=PLuHgQVnccGMBT57a9dvEtd6OuWpugF9SH&index=66&t=0s",
#             "channel_id": 1,
#             "channel_name": "생활코딩"
#           },
#           {
#             "video_id": 256,
#             "title": "WEB2 CSS - 12. 미디어 쿼리 소개",
#             "created_at": "2017-10-25",
#             "url": "https://www.youtube.com/watch?v=aA4xunvDWU8&list=PLuHgQVnccGMAnWgUYiAW2cTzSBywFO75B&index=13&t=0s",
#             "channel_id": 1,
#             "channel_name": "생활코딩"
#           },
#           {
#             "video_id": 108,
#             "title": "관계형 데이터 모델링 - 5.5.1. N:M 관계의 처리",
#             "created_at": "2019-06-11",
#             "url": "https://www.youtube.com/watch?v=PN121bbdgSM&list=PLuHgQVnccGMDF6rHsY9qMuJMd295Yk4sa&index=21&t=0s",
#             "channel_id": 1,
#             "channel_name": "생활코딩"
#           },
#           {
#             "video_id": 53,
#             "title": "React - 5. create react app을 이용해서 개발환경구축",
#             "created_at": "2020-01-05",
#             "url": "https://www.youtube.com/watch?v=C9l-dQTeW7k&list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi&index=6&t=0s",
#             "channel_id": 1,
#             "channel_name": "생활코딩"
#           },
#           {
#             "video_id": 417,
#             "title": "split_lines | 1일 1파이썬 | Python, String, Beginner | 30 seconds of code | 김왼손의 왼손코딩",
#             "created_at": "2020-06-28",
#             "url": "https://www.youtube.com/watch?v=Jh50RSD94k0&list=PLGPF8gvWLYypxQkVa1mXGn3td5wX2F-3L&index=4&t=0s",
#             "channel_id": 3,
#             "channel_name": "김왼손의 왼손코딩"
#           },
#           {
#             "video_id": 1120,
#             "title": "HTML 태그 완성, 웹 포트폴리오 만들기 전에 꼭 보세요 | 프론트엔드 개발자 입문편: HTML, CSS, Javascript",
#             "created_at": "2020-01-26",
#             "url": "https://www.youtube.com/watch?v=OoA70D2TE0A&list=PLv2d7VI9OotQ1F92Jp9Ce7ovHEsuRQB3Y&index=8&t=0s",
#             "channel_id": 5,
#             "channel_name": "드림코딩 by 엘리"
#           },
#           {
#             "video_id": 160,
#             "title": "Linux - IO Redirection2 : input",
#             "created_at": "2016-11-25",
#             "url": "https://www.youtube.com/watch?v=pagAkhHpzQk&list=PLuHgQVnccGMBT57a9dvEtd6OuWpugF9SH&index=18&t=0s",
#             "channel_id": 1,
#             "channel_name": "생활코딩"
#           },
#           {
#             "video_id": 178,
#             "title": "Linux - Mult user 1 : intro",
#             "created_at": "2016-12-02",
#             "url": "https://www.youtube.com/watch?v=pZLb5L2pn4w&list=PLuHgQVnccGMBT57a9dvEtd6OuWpugF9SH&index=36&t=0s",
#             "channel_id": 1,
#             "channel_name": "생활코딩"
#           },
#           {
#             "video_id": 234,
#             "title": "WEB1 - 19.2.3. 웹브라우저와 웹서버의 통신 (맥)",
#             "created_at": "2017-12-20",
#             "url": "https://www.youtube.com/watch?v=1i9_plf2g7A&list=PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb&index=26&t=0s",
#             "channel_id": 1,
#             "channel_name": "생활코딩"
#           },
#           {
#             "video_id": 937,
#             "title": "안티 리덕스? 리액트 Context API - #2 Setup",
#             "created_at": "2018-05-03",
#             "url": "https://www.youtube.com/watch?v=7_9NySABBWs&list=PL7jH19IHhOLNY7b4Ludyz18PNqT3gfEUP",
#             "channel_id": 6,
#             "channel_name": "노마드 코더 Nomad Coders"
#           },
#           {
#             "video_id": 318,
#             "title": "WEB2 - Python - 3.1.3.실습환경 준비-CGI 설정 (linux & codeanywhere)",
#             "created_at": "2018-03-13",
#             "url": "https://www.youtube.com/watch?v=N8PPDLd0G70&list=PLuHgQVnccGMDMxfZEpLbzHPZUEwObEaZq&index=7&t=0s",
#             "channel_id": 1,
#             "channel_name": "생활코딩"
#           },
#           {
#             "video_id": 181,
#             "title": "Linux - Add user",
#             "created_at": "2016-12-02",
#             "url": "https://www.youtube.com/watch?v=9wXRU_61Ti8&list=PLuHgQVnccGMBT57a9dvEtd6OuWpugF9SH&index=39&t=0s",
#             "channel_id": 1,
#             "channel_name": "생활코딩"
#           },
#           {
#             "video_id": 1068,
#             "title": "데이터베이스의 개념과 CRUD 게시판 만들기",
#             "created_at": "2019-10-30",
#             "url": "https://www.youtube.com/watch?v=2CHkds265N8&list=PLU9-uwewPMe19RQNzTdSdewSgw92UI1kl",
#             "channel_id": 9,
#             "channel_name": "조코딩 JoCoding"
#           },
#           {
#             "video_id": 41,
#             "title": "React Redux - 4. redux를 도입",
#             "created_at": "2020-01-12",
#             "url": "https://www.youtube.com/watch?v=SaXgXcgJ5xg&list=PLuHgQVnccGMDuVdsGtH1_452MtRxALb_7&index=6&t=0s",
#             "channel_id": 1,
#             "channel_name": "생활코딩"
#           },
#           {
#             "video_id": 159,
#             "title": "Linux - IO Redirection1 : output",
#             "created_at": "2016-11-25",
#             "url": "https://www.youtube.com/watch?v=kpcEoSiMgnU&list=PLuHgQVnccGMBT57a9dvEtd6OuWpugF9SH&index=17&t=0s",
#             "channel_id": 1,
#             "channel_name": "생활코딩"
#           },
#           {
#             "video_id": 201,
#             "title": "Linux - Domain 2 hosts",
#             "created_at": "2016-12-11",
#             "url": "https://www.youtube.com/watch?v=ak1Q4hGD86A&list=PLuHgQVnccGMBT57a9dvEtd6OuWpugF9SH&index=59&t=0s",
#             "channel_id": 1,
#             "channel_name": "생활코딩"
#           },
#           {
#             "video_id": 11,
#             "title": "Github.com - 1. 수업소개",
#             "created_at": "2020-02-28",
#             "url": "https://www.youtube.com/watch?v=tocFib6Ytls&list=PLuHgQVnccGMDWjb0TWItMCfDWDs8Y3Oo7&index=2&t=0s",
#             "channel_id": 1,
#             "channel_name": "생활코딩"
#           },
#           {
#             "video_id": 277,
#             "title": "WEB2 JavaScript - 17.조건문의 활용",
#             "created_at": "2017-12-01",
#             "url": "https://www.youtube.com/watch?v=Gt2iGEEKXww&list=PLuHgQVnccGMBB348PWRN0fREzYcYgFybf&index=18&t=0s",
#             "channel_id": 1,
#             "channel_name": "생활코딩"
#           },
#           {
#             "video_id": 241,
#             "title": "WEB1 부록 - 코드의 힘 : 댓글 기능 추가",
#             "created_at": "2017-12-23",
#             "url": "https://www.youtube.com/watch?v=LVLHprUg-PM&list=PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb&index=33&t=0s",
#             "channel_id": 1,
#             "channel_name": "생활코딩"
#           }
#         ]
#       ]
#   }

if __name__ == '__main__':
  pytest.main()