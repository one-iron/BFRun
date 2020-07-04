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

    def get_contents_types(self):
        get_contents_types_sql = """
        SELECT
            id,
            name
        FROM
        contents_types
        """

        db = DB()
        return db.dict_fetch(get_contents_types_sql)

    def get_stacks(self, position_id):
        get_stacks_sql = """
        SELECT
            id,
            name
            color_code
        FROM
            stacks
        WHERE
            position_id = %s
        """

        db = DB()
        return db.dict_fetch(get_stacks_sql, (position_id))

    def get_channels(self):
        get_channels_sql = """
        SELECT
            id,
            name
        FROM
        channels
        """

        db = DB()
        return db.dict_fetch(get_channels_sql)
