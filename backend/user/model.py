
from connection import DB

class UserDao:
    def google_login(self, user, db):
        login_sql = """
        INSERT INTO users (google_id)
        SELECT %(id)s FROM DUAL
        WHERE NOT EXISTS (
            SELECT google_id
            FROM users 
            WHERE google_id = %(id)s
            )
        """
        db.insert(login_sql, user)

    def get_user(self, google_id, db):
        get_user_sql = """
        SELECT id
        FROM users
        WHERE google_id = %s
        """

        return db.fetchone(get_user_sql, google_id)[0]

