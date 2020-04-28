const twillio = require('twilio');



class TwillioClient{

    constructor(account_sid, auth_token){
        this.client = twillio(account_sid, auth_token);
    }

    async send_sms(text){
        console.log(text);
        const msg = await this.client.messages.create({body: text, from: '+18452500652', to: '+917799130519'});
        return msg;
    }

}


module.exports = TwillioClient;