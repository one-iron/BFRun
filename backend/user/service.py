from config import SECRET_KEY, ALGORITHM


class UserService:
    def __init__(self, user_dao):
        self.user_dao = user_dao

    def test(self):
        data = self.user_dao.test_dao()
        return data

