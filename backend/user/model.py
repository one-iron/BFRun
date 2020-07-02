import pymysql

from connection import DB


class UserDao:
    def google_login(self, user):
        login_sql = """
        INSERT INTO user(
            google_id
            ) values (
            %s
            )
        """

        db = DB()
        db.fetch(login_sql, user)

    def test_dao(self):
        test_sql = """
        SELECT 
        url 
        FROM videos
        WHERE channel_id = 1 AND stack_id = 1
        LIMIT 10;
        """

        db = DB()
        return db.fetch(test_sql)

