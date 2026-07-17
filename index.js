// Write your code here!

function displayPosts(posts) {
  const ul = document.querySelector("#post-list");
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    console.log(post);
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    h1.textContent = post.title;
    const p = document.createElement("p");
    p.textContent = post.body;
    li.append(h1);
    li.append(p);

    ul.append(li);
  }
}
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  displayPosts(posts);
}
getPosts();