const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    taskfile: {
        type: Buffer,
    }
}, {
    timestamps: true
})




// owner:{
//     type: mongoose.Schema.Types.ObjectId,   //refer below
//     ref: 'User',
//     required: true,

// }



//middleware - one way of middleware provided by mongoose. (just testing it)
TaskSchema.pre('save', (next) => {
    const task = this;
    console.log("Running before saving the task")
    
    next();
})


const Task = mongoose.model('Task', TaskSchema);

module.exports = Task




//how the below is working,

// owner:{
//     type: mongoose.Schema.Types.ObjectId,   //refer below
//     ref: 'User',
//     required: true,

// }

// In the schema snippet you provided, owner is a field within a document that references another document in a MongoDB collection. 
// Here's an explanation of the type and ref properties:

// type:
// mongoose.Schema.Types.ObjectId: This indicates that the owner field will store MongoDB ObjectIDs. 
// ObjectIDs are unique identifiers automatically generated by MongoDB for each document in a collection. 
// They are typically used as primary keys.
// When you use mongoose.Schema.Types.ObjectId as the type, you're telling Mongoose that the owner field will store the ID of a document in another collection.

// ref:
// 'User': This specifies the name of the collection that the owner field refers to. In this case, the owner field references documents in the "User" collection.
// When you set ref: 'User', you're establishing a relationship between the current schema and the "User" collection. It tells Mongoose that the values stored in 
// the owner field will be ObjectIDs referencing documents in the "User" collection.
// By using type: mongoose.Schema.Types.ObjectId and ref: 'User' together, you're defining a relationship between documents in two collections. This is known as a 
// "population" in Mongoose, where you can retrieve related documents from the referenced collection when querying based on the ObjectID stored in the owner field.

// For example, if you have a document with an owner field containing an ObjectID referencing a document in the "User" collection, you can use Mongoose's populate() 
// method to retrieve the associated user document when querying the document containing the owner field. This allows you to easily access related data across collections 
// in MongoDB.