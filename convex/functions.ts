import { v } from "convex/values";
import { internalMutation, mutation, query } from "./_generated/server";
// import { useMutation } from "convex/react";
import { requireUser } from "./helpers";

export const getTodos = query({
//   args: {},
  handler: async (ctx) => {
    const user = await requireUser(ctx)

    // const user = await ctx.auth.getUserIdentity();
    // if(user)
    return await ctx.db.query("tasks").withIndex("by_user_id",q=>q.eq("userId",user.tokenIdentifier))
    .collect()
    // .filter(q=>q.eq(q.field("userId"), user?.tokenIdentifier))
    // .collect();
  },
});



export const createTodos = mutation({
  
    args: {
      title: v.string(),
      description: v.string(),
      completed: v.boolean(),
    },
    handler: async (ctx, args) => {
      // const user = await ctx.auth.getUserIdentity(); 
      // if (!user ){
      //   throw new Error("You must be authenticated to create tasks");
      // }
      const user = await requireUser(ctx)

       await ctx.db.insert("tasks", {
        title: args.title,
        description: args.description,
        completed: false,
        userId: user.tokenIdentifier

      });
    },
  });


    export const updateTodo=mutation({
        args:{
            id:v.id("tasks"),
            completed:v.boolean(),
        },
        handler:async(ctx, args)=>{
        const user = await requireUser(ctx)
        const todo = await ctx.db.get(args.id)
        if(todo?.userId!== user.tokenIdentifier){
            throw new Error("You are not authorized to update this task")
        }
          
        return await ctx.db.patch(args.id,{completed:args.completed})
        }
    })

    export const deleteTodo = mutation({
        args:{
          id:v.id("tasks")
        },
        handler:async(ctx,args)=>{
          const user = await requireUser(ctx)
        const todo = await ctx.db.get(args.id)
        if(todo?.userId!== user.tokenIdentifier){
            throw new Error("You are not authorized to update this task")
        }
          
            await ctx.db.delete(args.id);
        },
    })


    export const createManyTodos=internalMutation({
      args: {
        userId: v.string(),
        todos: v.array(
          v.object({
            title: v.string(),
            description: v.string(),
            completed: v.boolean(),
          })
        ),
      },
      handler: async (ctx, args) => {
        for(const todo of args.todos){
          await ctx.db.insert("tasks",{
            title:todo.title,
            description: todo.description,
            completed: todo.completed,
            userId: args.userId
          })
  

        }}})
  