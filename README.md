# Julian Acosta take home test

## Run
- `git clone git@github.com:IAmJulianAcosta/awesome-gifs.git`
- rename `.env.example` to `.env`
- add your giphy API key to `.env`
- `ember serve` 
- `npm install` 

## Online version
Go to https://awesomegifs.julianacosta.me

## TODO / Out of scope of the test
- The API key is stored in the client, so it is exposed. Ideally requests should be proxied to prevent this
- Form validation (limit and offset should be numbers)
- Fix logo grow animation
- Lang validation in query (has to be some of giphy supported langs)
- Duplicated validation in route and service
- Fancy loader for gifs
- Duplicated method in controllers, should move to decorated class
- Animation to go from grid to single GIF
- Improve tablet styles
- Mocking API in tests to improve detection of text
