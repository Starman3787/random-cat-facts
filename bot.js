const { Client } = require("discord.js-light");
const fetch = require("node-fetch");
const facts = require("./facts.json");
const client = new Client();

client.once("ready", () => {
    console.log("nice");
});

client.on("raw", raw => {
    if (raw?.t == "INTERACTION_CREATE") {
        fetch(`https://discord.com/api/v8/interactions/${raw.d.id}/${raw.d.token}/callback`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                type: 4,
                data: {
                    content: facts[Math.floor(Math.random() * facts.length)]
                }
            }),
        });
    }
});

client.login("YOUR TOKEN HERE");