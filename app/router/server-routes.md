## Server routes:

### Blog

* `api/blog`
  * GET
    * **Returns** all blogs
  * POST
    * **New blog post** 
	* User must be **logged-in**
* `api/blog/:id`
  * GET
    * **Returns** a blog post with current 'id'
* `api/blog/:tag`
  * GET
    * **Returns** all blogs with current 'tag'
* `api/blog/comment/:id`
  * PUT
    * **Push** a comment in a blog post with current 'id'
    * Needs **comment**, **username** and **date** to be sent in the body 
    * User must be **logged-in**

###	Games

* `api/games`
  * GET
    * **Returns** all games
  * POST
    * **New game** 
	* User must be **logged-in**
* `api/games/:id`
  * GET
    * **Returns** a game with current 'id'
* `api/games/:tag`
  * GET
    * **Returns** all games with current 'tag'
* `api/games/comment/:id`
  * PUT
    * **Push** a comment in a game with current 'id'
    * Needs **comment**, **username** and **date** to be sent in the body 
    * User must be **logged-in**
