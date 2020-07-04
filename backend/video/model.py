from connection import DB


class VideoDao:

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

    def get_video_detail(self, video_id):
        get_video_sql = """
        SELECT
            channel_id,
            channels.name AS channel_name,
            channels.profile_url AS channel_profile,
            title,
            DATE_FORMAT(created_at, '%%Y-%%m-%%d') AS created_at,
            view,
            description,
            url AS video_url,
            stack_id,
            playlist_id,
            contents_types_id
        FROM videos
        INNER JOIN channels ON channels.id = videos.channel_id
        WHERE videos.id = %s
        """

        db = DB()
        return db.dict_fetch(get_video_sql, video_id)[0]

    def get_video_playlist(self, video_id):
        get_playlist_sql = """
        SELECT 
            videos.id,
            title,
            videos.url,
            DATE_FORMAT(videos.created_at, '%%Y-%%m-%%d') AS created_at,
            playlist_id
        FROM videos
        INNER JOIN playlists ON videos.playlist_id = playlists.id
        WHERE playlist_id = (SELECT playlist_id FROM videos WHERE videos.id = %s)
        """
        db = DB()
        return db.dict_fetch(get_playlist_sql, video_id)
