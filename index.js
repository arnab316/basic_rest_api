const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const blogList = [];

app.post('/blogs', (req, res) => {
    // console.log(req.body)
     blogList.push({title:req.body.title,
         content:req.body.content,
        id: Math.floor(Math.random() * 1000)
        });

      return res.status(200).json({
        success: true,
      })

})

app.get('/blogs/:id', (req, res) => {
    const result = blogList.filter(blog => blog.id == req.params.id)
    return res.status(200).json({
        data: result,
        success: true,
    })
})


app.get('/blogs', (req, res) => {
    res.json({
        data : blogList,
        success : true,
    })
})


app.delete('/blogs/:id', (req, res) => {
   

    const result = blogList.pop(req.params.id);
    return res.status(200).json({
        data : result,
        success: true,
    })
})



const port = 3002;
app.listen(port,() => {
    console.log(`app listening on ${port}`)
});