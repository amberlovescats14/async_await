const posts = [
  { title: 'Post One', body: "This is post one"},
  { title: 'Post TWO', body: "This is post TWO"}
]

const getPosts = () => {
  setTimeout(()=> {
    let output = '';
    posts.forEach((post, i)=> {
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output
  },1000)
}
//1000 is one second

getPosts()


const createPost = (post, callback) => {
  setTimeout(()=> {
    posts.push(post)
    callback()
  },2000)
}
  
  createPost({title: `Post Three`, body: `This is post Three`}, getPosts)