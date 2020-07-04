
from connection import DB

class UserDao:
    def google_login(self, user):
        login_sql = """
        INSERT INTO users (google_id)
        SELECT %(id)s FROM DUAL
        WHERE NOT EXISTS (
            SELECT google_id
            FROM users 
            WHERE google_id = %(id)s
            )
        """

        db = DB()
        db.insert(login_sql, user)

    def get_user(self, user):
        get_user_sql = """
        SELECT id
        FROM users
        WHERE google_id=%s
        """
        db = DB()
        db.fetch(get_user_sql, user)

