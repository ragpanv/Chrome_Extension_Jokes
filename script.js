fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokedata => {
        const jtext=jokedata.attachments[0].text;
        const jid=document.getElementById('ele');

        jid.innerHTML=jtext;
    })