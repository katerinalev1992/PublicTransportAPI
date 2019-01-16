import Server from "./Server";

try{
    new Server({
        port: 8080,
        applicationName: 'Transport API'
    }).run();
} catch (e) {

}
