// likedRecipeModel.js
import mongoose from 'mongoose'

const likedRecipeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",  // Reference to your User model
    required: true,
  },
  likedRecipes: [
    {
      idMeal: String,
      strMeal: String,
      strMealThumb: String
    }
  ]
})

export default mongoose.model('LikedRecipe', likedRecipeSchema)
