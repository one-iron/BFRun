from connection import DB

class VideoDao:

    def get_video(self, user):
        get_video_sql = """
        SELECT id,
            title,
            created_at,
            view,
            description,
            url,
            stacks_id,
            channel_id,
            playlist_id,
            contents_types_id
        FROM videos
        """

        db = DB()
        db.fetch(get_video_sql, user)
