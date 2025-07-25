

import express from 'express'
import LikedRecipe from '../models/likdRecipe.js'

import verifyToken from '../middleware/authmiddleware.js'


const router = express.Router()



//post the liked recipes 


router.post('/post', verifyToken, async (req, res) => {

    const userID = req.user._id;
    const recipe = req.body



    try {
        let likedDoc = await LikedRecipe.findOne({ user: userID })

        if (!likedDoc) {
            likedDoc = new LikedRecipe({

                user: userID,
                likedRecipes: [recipe]
            })


        }
        else {

            const alreadyLiked = likedDoc.likedRecipes.some(
                (rec) => rec.idMeal === recipe.idMeal
            )

            if (alreadyLiked) {
                return res.status(200).json({
                    message: "Already liked"
                })
            }
            else {
                likedDoc.likedRecipes.push(recipe)
            }


        }

        await likedDoc.save()
        return res.status(200).json({
            message: "Recipe liked"
        })

    }
    catch (e) {
        res.status(400).json({
            message: `server error: ${e}`

        })
    }
})



// get the liked recipes


router.get('/get', verifyToken, async (req, res) => {

    const userID = req.user._id;

    try {
        let searchedDoc = await LikedRecipe.findOne({ user: userID })

        if (!searchedDoc) {
            return res.status(404).json({
                message: "no doc found",
                likedRecipes: []
            })
        }
        else {
            return res.status(200).json({
                likedRecipes: searchedDoc.likedRecipes
            })
        }
    }

    catch (e) {

        return res.status(400).json({
            message: `server error ${e}`
        })

    }

})



// remove from liked recipes



router.delete('/delete', verifyToken, async (req, res) => {

    const userID = req.user._id;
    const recipe = req.body



    try {
        let likedDoc = await LikedRecipe.findOne({ user: userID })

        const findRec = likedDoc.likedRecipes.some(
            (rec) => rec.idMeal === recipe.idMeal
        )

        if (!findRec) {
            return res.status(404).json({
                message: "no record found"
            })
        }
        else {
            likedDoc.likedRecipes.remove(recipe)
           
        }




        await likedDoc.save()
        return res.status(200).json({
            message: "Removed from liked recipies successfully"
        })

    }
    catch (e) {
        res.status(400).json({
            message: `server error: ${e}`

        })
    }
})



export default router;