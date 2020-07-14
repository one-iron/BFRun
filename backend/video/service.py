import yaml
import pymysql

from connection import DB

with open("const.yaml") as yaml_const:
    yaml = yaml.safe_load(yaml_const)

class VideoService:
    def __init__(self, video_dao):
        self.video_dao = video_dao

    def get_category_lists(self):
        db = DB()         
        try:          
            # 카테고리
            categories = {}
            stacks = []

            # 콘텐츠 타입
            contents_types = self.video_dao.get_contents_types(db)
            # 크리에이터 채널
            channels = self.video_dao.get_channels(db)
            # 스택
            with open("const.yaml") as yaml_const:
                stack = yaml.safe_load(yaml_const)
  
                general_stacks = self.video_dao.get_stacks(stack["general"], db)
                frontend_stacks = self.video_dao.get_stacks(stack["frontend"], db)
                backend_stacks = self.video_dao.get_stacks(stack["backend"], db)

                stacks.append({"general_stacks": general_stacks})
                stacks.append({"frontend_stacks": frontend_stacks})
                stacks.append({"backend_stacks": backend_stacks})

            categories["content_types"] = contents_types
            categories["stacks"] = stacks
            categories["channels"] = channels

            return categories

        except pymysql.err.Error as e:
            return {"message" : "DATABASE ERROR"}
        
        finally:

            if db:
                db.close()

    def get_video_detail(self, video_id):
        db = DB()
        try:
            if video_id > yaml["video_max_id"] or video_id < yaml["video_min_id"]:
                return yaml["no_response"]

            video_detail, video_playlist = (
                self.video_dao.get_video_detail(video_id, db),
                self.video_dao.get_video_playlist(video_id, db),
            )
            return video_detail, video_playlist

        except pymysql.err.Error:
            return {"message" : "DATABASE ERROR"}, 500

        finally:
            if db:
                db.close()

    def get_video_lists(self, params): 
        db = DB()
        try:   
            videos = []
            contents_types = params["contents_types_id"]
            stacks         = params["stack_id"]
            channels       = params["channels_id"] 

            # 콘텐츠 타입 필터
            if contents_types:        
                videos.append(self.video_dao.get_contents_types_videos(contents_types, db))
            
            # 스택 필터
            if contents_types is None and channels is None and stacks:        
                for stack in stacks:
                    stack_video = self.video_dao.get_stack_videos(stack, db)
                    # 검색된 배열이 없는 경우
                    if stack_video == 0:
                        videos.append([])
                    else:
                        videos.append(stack_video)               

            # 채널 필터
            if contents_types is None and stacks is None and channels:   
                for channel in channels:
                    channel_video = self.video_dao.get_channel_videos(channel, db)
                    # 검색된 배열이 없는 경우
                    if channel_video == 0:
                        videos.append([])
                    else:
                        videos.append(channel_video)           

            # 채널, 스택 필터
            if contents_types is None and stacks and channels:
                channel_videos = []        
                for channel in channels:
                    videos = []

                    for stack in stacks:
                        filters = {}
                        filters["stack_id"]   = stack
                        filters["channel_id"] = channel
                        stack_videos = self.video_dao.get_videos(filters, db)

                        if stack_videos == 0:
                            stack_videos = ""
                            
                        videos += stack_videos                
                    channel_videos.append(videos)
                
                return channel_videos        
    
            return videos

        except pymysql.err.Error:
            return {"message" : "DATABASE ERROR"}, 500
        
        finally:

            if db:
                db.close()
                
    def recommand_video_service(self):
        db = DB()
        try:
            videos = []
            for position in yaml['position_id']:
                videos.append(self.video_dao.recommand_video_model(position, db))

            return videos

        except pymysql.err.Error:
            return {"message": "DATABASE ERROR"}, 500

        finally:
            if db:
                db.close()

