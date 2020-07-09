import yaml


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
            const = yaml.load(yaml_const)
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
        video_detail, video_playlist = (
            self.video_dao.get_video_detail(video_id),
            self.video_dao.get_video_playlist(video_id),
        )
        return video_detail, video_playlist

    def get_video_lists(self, params):

        filters = {}
        video_lists = {}
        # 필터 parameter binding
        stacks = []
        channels = []
        contents_types = params.get("contents_types_id", None)
        stacks = params.getlist("stack_id", None)
        channels = params.getlist("channels_id", None)
 
        # 콘텐츠 타입 필터
        if contents_types:
            video_lists["videos"] = self.video_dao.get_contents_types_videos(
                contents_types
            )
            return video_lists

        # 스택 필터
        if contents_types is None and len(channels) == 0:
            videos = []
            for stack in stacks:
                videos.append(self.video_dao.get_stack_videos(stack))
                video_lists["videos"] = videos

            return video_lists

        # 채널 필터
        if contents_types is None and len(stacks) == 0:
            videos = []
            for channel in channels:
                videos.append(self.video_dao.get_channel_videos(channel))
                video_lists["videos"] = videos

            return video_lists

        # 채널, 스택 필터
        for channel in channels:
            videos = []
            for stack in stacks:
                filters = {}
                filters["stack_id"] = stack
                filters["channel_id"] = channel
                stack_videos = self.video_dao.get_videos(filters)

                if stack_videos == 0:
                    stack_videos = ""
                videos += stack_videos

            channel_name = self.video_dao.get_channel_name(channel)         
            video_lists[channel_name[0]["name"]] = videos

        return {"videos" : video_lists}

    def recommand_video_service(self):
        videos = []
        for position in range(1, 4):
            videos.append(self.video_dao.recommand_video_model(position))
        return videos

