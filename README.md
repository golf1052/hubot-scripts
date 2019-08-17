# hubot-scripts

Scripts for hubot.

See the main documentation [here](https://hubot.github.com/docs/scripting/).

To create a script:
1. `mkdir {SCRIPT NAME}`
2. `cd {SCRIPT NAME}`
3. `npm init`
4. Code your script
5. If you want your script to be loaded by hubot add `{SCRIPT NAME}` to [scripts.json](scripts.json).

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
