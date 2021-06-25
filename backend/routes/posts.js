import express from 'express';
import Posts from '../models/posts';
const router = express.Router();

//Timeline (All posts)
router.get('/timeline/all', async(req, res) => {
    try {
        const currentUser = await Posts.findById(req.body.userId);
        const userPosts = await Posts.find({userId: currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.following.map( (friendId) => {
                return Posts.find( {userId: friendId})
            })
        )
        res.json(userPosts.concat( ...friendPosts ))
        
    } catch (error) {
        res.status(500).json(`Error: ${error}`)
        
    }
    
});

//Get One post
router.get('/:id', async (req, res) => {
    try {
        const singlePost = await Posts.findById(req.params.id)
        res.status(200).json(singlePost)
    } catch (error) {
        res.status(404).json(`Error: ${error}`)
    }
})


//Create Post
router.post("/", async (req, res) => {
    const posts = req.body;
    const newPosts = await new Posts(posts);

    try {
        const savedPosts = await newPosts.save();
        res.status(200).json(savedPosts)
        
    } catch (error) {
        res.status(500).json(`Error: ${error}`)
    }
})

//Update Posts
router.put('/:id', async (req, res) => {
    try {
        const userpost = await Posts.findById(req.params.id);
        if ( userpost.userId === req.body.userId ) {
            await userpost.updateOne({$set: req.body});
            res.status(200).json('Your post has been updated')
        } else {
            res.status(403).json('You can only update your posts')
            
        }
        
    } catch (error) {
        res.status(500).json(`Error: ${error}`)
        
    }

})


//Delete Posts
router.delete('/:id', async (req, res) => {
    try {
        const userpost = await Posts.findById(req.params.id);
        if ( userpost.userId === req.body.userId ) {
            await userpost.deleteOne({$set: req.body});
            res.status(200).json('Your post has been deleted')
        } else {
            res.status(403).json('You can only delete your posts')
            
        }
        
    } catch (error) {
        res.status(500).json(`Error: ${error}`)
        
    }

});


//Like / Dislike posts

router.put('/:id/like', async (req, res) => {
    try {
        const userpost = await Posts.findById(req.params.id);
        if (!userpost.likes.includes(req.body.userId)) {
            await userpost.updateOne( {$push: {likes: req.body.userId} })
            res.status(200).json(`Your post was liked`);
            
        } else {
            await userpost.updateOne( {$pull: {likes: req.body.userId} });
            res.status(200).json(`Your post was disliked`);
        }
        
    } catch (error) {
        res.status(500).json(`Error: ${error}`)
    }

})

export default router;