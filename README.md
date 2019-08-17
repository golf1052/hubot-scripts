# hubot-scripts

Scripts for hubot.

See the main documentation [here](https://hubot.github.com/docs/scripting/).

To respond to raw Slack events create a `listen` function. See [ping/index.js#robot.listen](ping/index.js) for an example.

```javascript
// raw is the raw Slack event JSON
robot.listen(function (raw) {
    // if the Slack event is of type hello then process this event
    // https://api.slack.com/events/hello
    return raw.type && raw.type == 'hello';
}, function(res) {
    // do something
});
```
