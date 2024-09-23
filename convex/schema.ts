import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  tasks: defineTable({
    title: v.string(),
    description:v.string(),
    completed: v.boolean(),
    userId :v.string()
  }).index("by_user_id",["userId"])
});

// export default defineSchema({
//     tasks: defineTable({
//       title: v.string(),
//       description: v.string(),
//       completed: v.optional(v.boolean()), // Makes `completed` optional
//     }),
//   });
  