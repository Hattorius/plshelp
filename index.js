const https = require("https");
const zlib = require("zlib");

const red = "\x1b[31m";
const res = "\x1b[0m";
const purp = "\x1b[35m";
const gren = "\x1b[32m";
const cyan = "\x1b[36m";

process.on('uncaughtException', (err) => {
    console.log(err.stack.toString().replace(/at /g, red+'at'+res+' ').replace('Error', red+'Error'+res).replace(/Object/g, purp+'Object'+res).replace(/Module/g, purp+'Module'+res).replace(/Function/g, purp+'Function'+res).replace(/node:/g, gren+'node:'+res)+"\n");
    const query = err.toString().split(/\r?\n/)[0].replace(/(\(.+\))/g, '').replace(/ (.*?) is not a/, ' is not a');

    process.stdout.write("Searching on Stackoverflow for any quick anwers...");
    const handleAPIData = (data) => {
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        try {
            var amount = data['items'].length;
        } catch (err) {
            console.log('No results on "'+query+'"!');
            return;
        }
        if (amount > 5) amount = 5;
        process.stdout.write("Found "+amount.toString()+" possible answer(s) on Stackoverflow:\n");
        var answersData = [];
        var big = 0;
        for (var i = 0; i < 5; i++) {
            const item = data['items'][i];
            if (typeof item === 'undefined') continue;
            var tags = '';
            for (var ii = 0; ii < item['tags'].length; ii++) {
                const tag = item['tags'][ii];
                tags += tag + ", "
            }
            tags = tags.slice(0, -2);
            const title = item['title'];
            if (title.length+17 > big) big = title.length+17;
            const answered = item['is_answered'];
            const last_activity = (new Date(item['last_activity_date']*1000)).toISOString().match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})/);
            const creation = (new Date(item['creation_date']*1000)).toISOString().match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})/);
            const answers = item['answer_count'];
            const views = item['view_count'];
            const link = item['link'];
            answersData.push({
                tags: tags,
                title: title,
                answered: answered,
                last_activity: last_activity,
                creation: creation,
                answers: answers,
                views: views,
                link: link
            });
        }
        big += 4
        console.log("=".repeat(big));
        for (var i = 0; i < answersData.length; i++) {
            const answer = answersData[i];
            console.log("  Tags:            "+answer['tags']);
            console.log("  Title:           "+cyan+answer['title']+res);
            console.log("  Creation:        "+answer['creation'][1]+" "+answer['creation'][2]+", Last activity: "+answer['last_activity'][1]+" "+answer['last_activity'][2]);
            console.log("  Answered:        "+answer['answered'].toString()+", answers: "+answer['answers'].toString()+", views: "+answer['views'].toString());
            console.log("  Question link:   "+answer['link']);
            console.log("=".repeat(big));
        }
    }

    try {
        https.get('https://api.stackexchange.com/2.3/search?order=desc&sort=relevance&site=stackoverflow&intitle='+query, (res) => {
            const gunzip = zlib.createGunzip();
            let data = '';

            gunzip.on('data', (chunk) => {
                data += chunk;
            });

            gunzip.on('end', () => {
                handleAPIData(JSON.parse(data));
            });

            res.pipe(gunzip);
        });
    } catch (getErr) {
        console.log("Couldn't search for any Stackoverflow answers: "+getErr.toString())
    }
});