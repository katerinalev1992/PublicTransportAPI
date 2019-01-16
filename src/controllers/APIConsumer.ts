import * as https from 'https';

export default class APIConsumer {

    URL = 'https://myttc.ca/';
    valid_Ids: Array<string> = ['st_clair_and_vaughan', 'union_station', 'finch_station'];

    constructor() {

    }

    getData(id: string) {

        return new Promise(((resolve, reject) => {
            https.get(`${this.URL}${id}.json`, (resp) => {
                let content = '';
                resp.on('data', (chunk) => {
                    content += chunk;
                });

                resp.on('end', () => {
                    try{
                        resolve(JSON.parse(content));
                    }catch(err){
                        reject('Found not parsable content');
                    }
                });

            }).on("error", (err) => {
                console.log("Error: " + err.message);
                reject("Data can't be received");

            });
        }));


    }

}