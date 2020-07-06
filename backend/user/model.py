
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

    def get_user(self, google_id):
        get_user_sql = """
        SELECT id
        FROM users
        WHERE google_id = %s
        """
        db = DB()
        return db.fetchone(get_user_sql, google_id)[0]

