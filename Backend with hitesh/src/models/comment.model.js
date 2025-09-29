import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';
import mongoose, { Schema } from 'mongoose'

const commentSchema = new Schema({
     content: {
          type: String,
          required: true
     },
     video: {
          type: Schema.Types.ObjectId,
          ref: 'Video',
     },
     owner: {
          type: Schema.Types.ObjectId,
          ref: 'User',
     }
},
     {
          timestamps: true
     }
)

commentSchema.plugin(mongooseAggregatePaginate); 

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;