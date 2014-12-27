
Template.postsList.helpers({
  posts: function(){
     return Posts.find();
  }
});

Template.body.events({
  "submit .new-post":function(){
     var title = event.target.title.value;
     Posts.insert({
       title: title,
       url:"http://code4war.com"
     });
     event.target.title.value = "";

     return false;
  }
});