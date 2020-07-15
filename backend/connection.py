import pymysql

from config           import db
import mysql.connector.pooling

class DB:
    def __init__(self):
        self.conn = pymysql.connect(
            host       = db["host"],
            user       = db["user"],
            password   = db["password"],
            db         = db["database"],
            autocommit = False,
        )
        # self.conn = conn

    def commit(self):
        self.conn.commit()

    def close(self):
        self.conn.close()

    def rollback(self):
        self.conn.rollback()

    def fetchall(self, sql, *args):
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
                self.rollback()
                return {'message': 'CANNOT INSERT DATA'}, 500
            if affected_row == 0:
                return 0
            if affected_row == 1:
                self.commit()
                return cursor.lastrowid

'''
class MySQLPool(object):
    """
    create a pool when connect mysql, which will decrease the time spent in
    request connection, create connection and close connection.
    """

    def __init__(self, host=db['host'], port=db['port'], user=db['user'],
                 password=db['password'], database=db['database'], pool_name="mypool",
                 pool_size=3):
        res = {}
        self._host = host
        self._port = port
        self._user = user
        self._password = password
        self._database = database

        res["host"] = self._host
        res["port"] = self._port
        res["user"] = self._user
        res["password"] = self._password
        res["database"] = self._database
        self.dbconfig = res
        self.pool = self.create_pool(pool_name=pool_name, pool_size=pool_size)

    def create_pool(self, pool_name="mypool", pool_size=3):
        """
        Create a connection pool, after created, the request of connecting
        MySQL could get a connection from this pool instead of request to
        create a connection.
        :param pool_name: the name of pool, default is "mypool"
        :param pool_size: the size of pool, default is 3
        :return: connection pool
        """
        pool = mysql.connector.pooling.MySQLConnectionPool(
            pool_name=pool_name,
            pool_size=pool_size,
            pool_reset_session=True,
            **self.dbconfig)
        return pool

    def close(self, conn, cursor):
        """
        A method used to close connection of mysql.
        :param conn:
        :param cursor:
        :return:
        """
        cursor.close()
        conn.close()

    def execute(self, sql, args=None, commit=False):
        """
        Execute a sql, it could be with args and with out args. The usage is
        similar with execute() function in module pymysql.
        :param sql: sql clause
        :param args: args need by sql clause
        :param commit: whether to commit
        :return: if commit, return None, else, return result
        """
        # get connection form connection pool instead of create one.
        conn = self.pool.get_connection()
        cursor = conn.cursor()
        if args:
            cursor.execute(sql, args)
        else:
            cursor.execute(sql)
        if commit is True:
            conn.commit()
            self.close(conn, cursor)
            return None
        else:
            res = cursor.fetchall()
            self.close(conn, cursor)
            return res

if __name__ == "__main__":
       mysql_pool = MySQLPool(**dbconfig)
       sql = "select * from store WHERE create_time < '2017-06-02'"
       p = Pool()
       for i in range(5):
           p.apply_async(mysql_pool.execute, args=(sql,))
'''