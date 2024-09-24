import { action } from "./_generated/server";
import {v} from "convex/values";
import OpenAI from "openai";
import {internal} from "./_generated/api"
import { requireUser } from "./helpers";

const openai= new OpenAI({
    baseURL:"https://openrouter.ai/api/v1",
    apiKey: process.env.OPENAI_API_KEY,

})

export const createTodos = action({ 
    args: {
        prompt: v.string(),
    },
    handler: async (ctx, args) => {
        const user = requireUser(ctx)
      const reponse = await openai.chat.completions.create({
        model: "openai/gpt-4o-mini",
        messages:[
            {
            role:"system",
            content:"Generate 3 of todo's based on the given prompt, please include title and description. Please return in the json format like {todos: [{title:'string',{description:'string'},{completed:false}]}"
        }
        ,{
            role:"user",
            content:`Prompt : ${args.prompt}`
        }
    ],

    response_format : {type:'json_object'},

      })
      const content =  JSON.parse(reponse.choices[0].message.content!) as {
        todos:{title:string,description:string,completed:boolean}[]
      }
      await ctx.runMutation(internal.functions.createManyTodos,{
        todos:content.todos,
        userId:(await user).tokenIdentifier
      })
      return content.todos;
    }


})