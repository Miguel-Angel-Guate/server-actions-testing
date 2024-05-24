import mongoose, { Document, Model } from "mongoose";


export interface ITodo {
    todo: string;
    todoDeadline: number;
}

export interface ITodoDocument extends ITodo, Document {
    createdAt: Date;
    updatedAt: Date;
}


const todoSchema = new mongoose.Schema<ITodoDocument>(
    {
        todo: {
            type: String,
            required: true,
        },
        todoDeadline: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// Creating a mongoose model for the todo document
const Todo: Model<ITodoDocument> =
    mongoose.models?.Todo || mongoose.model("Todo", todoSchema);

export default Todo;
