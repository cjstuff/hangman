from flask import Flask, render_template
from flask.ext.jasmine import Jasmine

app = Flask(__name__)
# app.debug = True
jasmine = Jasmine(app)

jasmine.specs(
    'specs/hangmanspec.js'
)

jasmine.sources(
    'static/hangman.js'
)

@app.route('/')
def init():
    return render_template('hangman.html')


if __name__ == '__main__':
    app.run()

