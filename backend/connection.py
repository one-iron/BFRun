import pymysql

from config     import db

class DB:
    def __init__(self):
        self.conn = pymysql.connect(
            host       = db['host'],
            user       = db['user'],
            password   = db['password'],
            db         = db['database'],
            autocommit = False
        )

    def __exit__(self):
        self.conn.close()

    def commit(self):
        self.conn.commit()

    def fetch(self, sql, *args):
        with self.conn.cursor() as cursor:
            affected_row = cursor.execute(sql, *args)

            if affected_row == -1:
                raise Exception("CANNOT INSERT DATA")
            if affected_row == 0:
                return 0

            return cursor.fetchall()

    def dict_fetch(self, sql, *args):
        with self.conn.cursor(pymysql.cursors.DictCursor) as cursor:
            affected_row = cursor.execute(sql, *args)

            if affected_row == -1:
                raise Exception("CANNOT INSERT DATA")
            if affected_row == 0:
                return 0
            return cursor.fetchall()