import yaml


class VideoService:
    def __init__(self, video_dao):
        self.video_dao = video_dao

    def get_category_lists(self):
        # 카테고리
        categories = {}
        # 콘텐츠 타입
        contents_types = self.video_dao.get_contents_types()
        with open("const.yaml") as yaml_const:
            const = yaml.load(yaml_const)
            # 스택
            general_stacks = self.video_dao.get_stacks(const["general"])
            frontend_stacks = self.video_dao.get_stacks(const["frontend"])
            backend_stacks = self.video_dao.get_stacks(const["backend"])

        # 크리에이터 채널
        channels = self.video_dao.get_channels()

        categories["content_types"] = contents_types
        categories["general_stacks"] = general_stacks
        categories["frontend_stacks"] = frontend_stacks
        categories["backend_stacks"] = backend_stacks
        categories["channels"] = channels

        return categories
