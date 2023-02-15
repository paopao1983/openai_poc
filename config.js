require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
 
 const configuration = new Configuration({
    organization: "org-mEEpGO8Xr2TDY7SJIGm1mVsJ",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response =  openai.listEngines();


