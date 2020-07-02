import pymysql

def create_video_endpoints(app, video_service):

    @app.route('/test1', methods=['GET'])
    def test():
        return 'hi'