app.posts= {
  all: [],
  new: (function(){
    var counter = 0;
    var post = function(state, likes, instaID){
      this.state= state;
      this.instaID= instaID;
      this.likes= likes;
      this.id= ++counter;
      app.posts.all.push(this)
    }(); 
  }
    return post;
  }())
}
