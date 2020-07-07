from app import create_app

if __name__ == "__main__":
    app = create_app()
    app.run(host="172.30.1.44", port=5000)
