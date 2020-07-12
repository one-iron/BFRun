import yaml
from connection import DB


class VideoService:
    def __init__(self, video_dao):
        self.video_dao = video_dao

    def get_category_lists(self):
        # 카테고리
        categories = {}
        stacks = []
        # 콘텐츠 타입
        contents_types = self.video_dao.get_contents_types()
        with open("const.yaml") as yaml_const:
            const = yaml.safe_load(yaml_const)
            # 스택
            general_stacks = self.video_dao.get_stacks(const["general"])
            frontend_stacks = self.video_dao.get_stacks(const["frontend"])
            backend_stacks = self.video_dao.get_stacks(const["backend"])

            stacks.append({"general_stacks": general_stacks})
            stacks.append({"frontend_stacks": frontend_stacks})
            stacks.append({"backend_stacks": backend_stacks})

        # 크리에이터 채널
        channels = self.video_dao.get_channels()

        categories["content_types"] = contents_types
        categories["stacks"] = stacks
        categories["channels"] = channels

        return categories

    def get_video_detail(self, video_id):
        db = DB()
        video_detail, video_playlist = (
            self.video_dao.get_video_detail(video_id, db),
            self.video_dao.get_video_playlist(video_id, db),
        )
        if db:
            db.close()
        return video_detail, video_playlist

    def get_video_lists(self, params):     

        videos = []
        contents_types = params["contents_types_id"]
        stacks         = params["stack_id"]
        channels       = params["channels_id"] 

        # 콘텐츠 타입 필터
        if contents_types:        
            videos.append(self.video_dao.get_contents_types_videos(contents_types))
          
        # 스택 필터
        if contents_types is None and channels is None and stacks:        
            for stack in stacks:
                videos.append(self.video_dao.get_stack_videos(stack))               

        # 채널 필터
        if contents_types is None and stacks is None and channels:   
            for channel in channels:
                videos.append(self.video_dao.get_channel_videos(channel))       

        # 채널, 스택 필터
        if contents_types is None and stacks and channels:
            channel_videos = []        
            for channel in channels:
                videos = []

                for stack in stacks:
                    filters = {}
                    filters["stack_id"]   = stack
                    filters["channel_id"] = channel
                    stack_videos = self.video_dao.get_videos(filters)

                    if stack_videos == 0:
                        stack_videos = ""
                        
                    videos += stack_videos                
                channel_videos.append(videos)
            
            return channel_videos
        
        if len(videos) != 0:    
            if videos[0] == 0:         
                videos.pop()

        return videos

    def recommand_video_service(self):
        db = DB()
        videos = []

        for position in range(1, 4):
            videos.append(self.video_dao.recommand_video_model(position, db))

        if db:
            db.close()

        return videos

