import pymysql

from config import db

class DB:
    def __init__(self):
        self.conn = pymysql.connect(
            host=db["host"],
            user=db["user"],
            password=db["password"],
            db=db["database"],
            autocommit=False,
        )

    def commit(self):
        self.conn.commit()

    def close(self):
        self.conn.close()

    def fetch(self, sql, *args):
        with self.conn.cursor() as cursor:
            affected_row = cursor.execute(sql, *args)

            if affected_row == 0:
                return 0

        return cursor.fetchall()

    def fetchone(self, sql, *args):
        with self.conn.cursor() as cursor:
            affected_row = cursor.execute(sql, *args)

            if affected_row == 0:
                return 0

        return cursor.fetchone()

    def dict_fetch(self, sql, *args):
        with self.conn.cursor(pymysql.cursors.DictCursor) as cursor:
            affected_row = cursor.execute(sql, *args)

            if affected_row == 0:
                return 0

        return cursor.fetchall()

    def insert(self, sql, *args):
        with self.conn.cursor() as cursor:
            affected_row = cursor.execute(sql, *args)

            if affected_row == -1:
                return {'message': 'CANNOT INSERT DATA'}, 500
            if affected_row == 0:
                return 0
            if affected_row == 1:
                self.conn.commit()
                return cursor.lastrowid
