from flask import Flask
import markdown
from markdown.extensions import fenced_code, codehilite

app = Flask(__name__)

@app.route('/blogs', methods=["POST"])
def create_blog_post():
    pass

@app.route('/blogs', methods=["GET"])
def get_blog_posts():
    markdown_file = open("blog1.md", "r")
    markdown_template_string = markdown.markdown(
        markdown_file.read(), extensions=["fenced_code", "codehilite"]
    )

    return markdown_template_string

if __name__ == "__main__":
    app.run(debug=True)