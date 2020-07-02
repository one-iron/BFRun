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






