import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { useMutation } from "convex/react";

export const getTodos = query({
//   args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});



export const createTodos = mutation({
    args: {
      title: v.string(),
      description: v.string(),
      completed: v.boolean(),
    },
    handler: async (ctx, args) => {
      return await ctx.db.insert("tasks", {
        title: args.title,
        description: args.description,
        completed: false, // Ensure this field is named `completed`
      });
    },
  });


// export const createTodos = mutation({
//       args: {
//         title: v.string(),
//         description: v.string(),
//         completed: v.boolean(),
//       },
//       handler: async (ctx, args) => {
//         return await ctx.db.insert("tasks",{
//            title:args.title,
//            description:args.description,
//            completed:false,

//         })
//       },
//     });


    export const updateTodo=mutation({
        args:{
            id:v.id("tasks"),
            completed:v.boolean(),
        },
        handler:async(ctx, args)=>{
        return await ctx.db.patch(args.id,{completed:args.completed})
        }
    })

    export const deleteTodo = mutation({
        args:{id:v.id("tasks")},
        handler:async(ctx,args)=>{
            await ctx.db.delete(args.id);
        },
    })