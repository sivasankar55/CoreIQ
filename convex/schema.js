"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("convex/server");
var values_1 = require("convex/values");
exports.default = (0, server_1.defineSchema)({
    users: (0, server_1.defineTable)({
        name: values_1.v.string(),
        email: values_1.v.string(),
        image: values_1.v.optional(values_1.v.string()),
        clerkId: values_1.v.string(),
    }).index("by_clerk_id", ["clerkId"]),
    plans: (0, server_1.defineTable)({
        userId: values_1.v.string(),
        name: values_1.v.string(),
        workoutPlan: values_1.v.object({
            schedule: values_1.v.array(values_1.v.string()),
            exercises: values_1.v.array(values_1.v.object({
                day: values_1.v.string(),
                routines: values_1.v.array(values_1.v.object({
                    name: values_1.v.string(),
                    sets: values_1.v.optional(values_1.v.number()),
                    reps: values_1.v.optional(values_1.v.number()),
                    duration: values_1.v.optional(values_1.v.string()),
                    description: values_1.v.optional(values_1.v.string()),
                    exercises: values_1.v.optional(values_1.v.array(values_1.v.string())),
                })),
            })),
        }),
        dietPlan: values_1.v.object({
            dailyCalories: values_1.v.number(),
            meals: values_1.v.array(values_1.v.object({
                name: values_1.v.string(),
                foods: values_1.v.array(values_1.v.string()),
            })),
        }),
        isActive: values_1.v.boolean(),
    })
        .index("by_user_id", ["userId"])
        .index("by_active", ["isActive"]),
});
