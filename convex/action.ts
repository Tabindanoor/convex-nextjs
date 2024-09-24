import { action } from "./_generated/server";
import {v} from "convex/values";
import OpenAI from "openai";

const openai= new OpenAI({
    baseURL:"https://openrouter.ai/api/v1",
    apiKey: process.env.OPENAI_API_KEY,

})

export const createTodos = action({ 
    args: {
        prompt: v.string(),
    },
    handler: async (ctx, args) => {
      const reponse = await openai.chat.completions.create({
        model: "openai/gpt-4o-mini",
        messages:[
            {
            role:"system",
            content:"Generate a list of todo's based on the given prompt, please include title and description. Please return in the json format like [{title:'string',{description:'string'}]"
        }
        ,{
            role:"user",
            content:`Prompt : ${args.prompt}`
        }
    ]
      })
      const content =  reponse.choices[0].message.content;
      return content;
    }


})