import os
from flask import Flask, render_template

# create a Flask app instance
app = Flask(__name__)

# define the routes for the app
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/resume")
def resume():
    return render_template("resume.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

# run the app if this file is executed directly
if __name__ == "__main__":
    app.run(
        host=os.environ.get("IP", "0.0.0.0"), # get the IP address from the environment variable, or use 0.0.0.0 if not set
        port=int(os.environ.get("PORT", "5000")), # get the port number from the environment variable, or use 5000 if not set
        debug=True) # enable debug mode for easier development and debugging