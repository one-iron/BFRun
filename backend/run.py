from app import create_app

if __name__ == "__main__":
    app = create_app()
    app.run(host="172.16.100.136", port=5000)
