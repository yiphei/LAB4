# Notedpad (client)
## Yifei Yan

### Introduction

Notepad is a web-based notepad application. You can create a note by typing the title in the bar and click add note. You can edit the title and content of the note. You can move the note by dragging it around. You can delete the note.

It also has full authentication features so that only signed in users can create/edit/delete posts.

### Client

- At the home routing, the posts component is displayed. If you click on add post, you get routed to the newpost component. If you click on an individual post, you get routed to the post/:postID component where postID is the unique ID of the post you clicked.

- it has full authentication features: signin, signout, singup. Also, only signedin users can create/edit/delete posts.

- When you create a new post, there is an input validation for the title. Therefore, if the title input is empty, then you cannot create a new post. You must have a title in order to create a new post.


**Client link**: notedapp.surge.sh

**Api link**: https://lab4cs52.herokuapp.com



