
Template.postsList.helpers({
  posts: function(){
     return Posts.find({},{sort:{createdAt:-1}});
  },
  count_post:function(){
    return Posts.find().count();
  }
});
