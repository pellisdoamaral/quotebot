module.exports = {
    name: 'cookie',
    description: 'when you give a bot a cookie,',

    execute(message, args){

        responses = [
            "Oooh, chocolate!",
            "`munch munch`",
            "Aww, thanks!",
            "Marvelous, another one for my collection.",
            "Oh hell yeah, you know how us online applications get about **cookies.**",
            "`C R O N C H`",
            ":cookie: :cookie: :cookie:"
        ]

        return message.channel.send(responses[Math.floor(Math.random() * responses.length)])

    },
};
