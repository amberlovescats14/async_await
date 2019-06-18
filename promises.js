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
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      posts.push(post)
      const error = false
      if(!error) {
        resolve()
      } else {
        reject(`Error something went wrong`)
      }
    },2000)
  })
}

// createPost({title: `Post Three`, body: `This is post 3`})
// .then(getPosts)
// .catch(err => console.log(err))
//! async await
// async function init() {
// await createPost({title: `Post Three`, body: `This is post 3`})

// getPosts()
// }
// init()
//! async await fetch 
async function fetchUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  console.log(data)
}
fetchUser()
//!Promise.all
// const promise1 = Promise.resolve(`Hello World`)
// const promise2 = 10
// const promise3 = new Promise((resolve, reject)=> setTimeout(resolve, 2000, `Goodbye`));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=> res.json())

// Promise.all([promise1, promise2, promise3, promise4])
// .then((values)=> console.log(values))

