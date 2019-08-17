module.exports = (robot) => {
    robot.respond(/ping$/i, function(res) {
        return res.send('pong');
    });

    robot.listen(function(raw) {
        return raw.type && raw.type == 'hello';
    }, function(res) {
        robot.slack.users.list().then((data) => {
            if (data.ok && data.ok == true) {
                data.members.forEach(member => {
                    res.send(member.name);
                });
            }
        });
    });
}
