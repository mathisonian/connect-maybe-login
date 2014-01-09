# connect-maybe-login

Set correct passport settings for pages which accept logged in & logged out users. This
is useful in the case that a user logs in from a form on that page, and will cause
their request to be properly redirected. 

## Getting Started
Install the module with: `npm install connect-maybe-login`

## Example Usage

```javascript
     app.get('/some-page', maybeLoggedIn(), function(req, res) { ... });
```

## License
Copyright (c) 2014 Matthew Conlen. Licensed under the MIT license.
