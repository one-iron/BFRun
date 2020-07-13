from connection import DB


class VideoDao:
    def get_contents_types(self, db):
        get_contents_types_sql = """
        SELECT
            id,
            name
        FROM
        contents_types
        """
  
        return db.dict_fetch(get_contents_types_sql)

    def get_stacks(self, position_id, db):
        get_stacks_sql = """
        SELECT
            id,
            name,
            color_code
        FROM
            stacks
        WHERE
            position_id = %s
        """
    
        return db.dict_fetch(get_stacks_sql, (position_id))

    def get_channels(self, db):
        get_channels_sql = """
        SELECT
            id,
            name
        FROM
        channels
        """
      
        return db.dict_fetch(get_channels_sql)

    def get_videos(self, filters, db):
        get_video_lists_sql = """
        SELECT
            videos.id AS video_id,
            videos.title,
            DATE_FORMAT(videos.created_at, '%%Y-%%m-%%d') AS created_at,
            videos.url,
            videos.channel_id,
            channels.name AS channel_name
        FROM
            videos
        INNER JOIN channels ON channels.id = videos.channel_id
        WHERE
            stack_id = %(stack_id)s AND channel_id = %(channel_id)s
        LIMIT 5
        """

        return db.dict_fetch(get_video_lists_sql, (filters))

    def get_contents_types_videos(self, contents_types_id, db):
        get_contents_types_videos_sql = """  
        SELECT
            videos.id AS video_id,
            videos.title,
            DATE_FORMAT(videos.created_at, '%%Y-%%m-%%d') AS created_at,
            videos.url,
            videos.channel_id,
            channels.name AS channel_name
        FROM
            videos
        INNER JOIN channels ON channels.id = videos.channel_id
        WHERE
            contents_types_id = %s
        ORDER BY
            RAND()
        LIMIT 20
        """
     
        return db.dict_fetch(get_contents_types_videos_sql, (contents_types_id))

    def get_stack_videos(self, stack_id, db):
        get_stack_videos_sql = """  
        SELECT
            videos.id AS video_id,
            videos.title,
            DATE_FORMAT(videos.created_at, '%%Y-%%m-%%d') AS created_at,
            videos.url,
            videos.channel_id,
            channels.name AS channel_name
        FROM
            videos
        INNER JOIN channels ON channels.id = videos.channel_id
        WHERE
            stack_id = %s
        ORDER BY
            RAND()
        LIMIT 20
        """
 
        return db.dict_fetch(get_stack_videos_sql, (stack_id))

    def get_channel_videos(self, channel, db):
        get_stack_videos_sql = """  
        SELECT
            videos.id AS video_id,
            videos.title,
            DATE_FORMAT(videos.created_at, '%%Y-%%m-%%d') AS created_at,
            videos.url,
            videos.channel_id,
            channels.name AS channel_name
        FROM
            videos
        INNER JOIN channels ON channels.id = videos.channel_id
        WHERE
            channel_id = %s
        ORDER BY
            RAND()
        LIMIT 20
        """

        return db.dict_fetch(get_stack_videos_sql, (channel))


    def get_channel_name(self, channel_id, db):
        get_channel_name_sql = """
        SELECT
            name
        FROM
            channels
        WHERE id = %s
        """
       
        return db.fetchone(get_channel_name_sql, (channel_id))

    def get_video_detail(self, video_id, db):
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

        return db.dict_fetch(get_video_sql, video_id)[0]

    def get_video_playlist(self, video_id, db):
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
        return db.dict_fetch(get_playlist_sql, video_id)

    def recommand_video_model(self, position, db):
        get_recommand_video_sql = """
        SELECT DISTINCT
            videos.id AS video_id,
            videos.view,
            videos.url,
            videos.title,
            channels.name AS channel_name
        FROM videos
        INNER JOIN channels ON videos.channel_id = channels.id
        INNER JOIN stacks ON videos.stack_id = stacks.id
        WHERE stacks.position_id = %s
        ORDER BY view DESC
        LIMIT 10
        """

        return db.dict_fetch(get_recommand_video_sql, position)
