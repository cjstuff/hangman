# hangman
Simple Hangman Web App

I have used an open source API based on OMDB API to get random movie names which I use as the guessing word
for Hangman. To save time, I used some logic from a Codepen I found and added the hangman photo picture and
the OMDB movie API.

API Source: http://www.omdbapi.com/

Forked code source: https://codepen.io/cathydutton/pen/ldazc

To run:
- pip install -r requirements.txt
- python hangman.py
- run localhost:5000
- Hint - The answer is in the console

To test (API success is tested, didnt have time to figure out how to test the async response using jasmine):
- jasmine
- run localhost:8888
