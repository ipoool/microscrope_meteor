Template.formAdd.events({
  "submit #new-post":function(){
     // get textValue
     var title = event.target.title.value;
     Posts.insert({
       title: title,
       url:"http://code4war.com",
       createdAt: new Date()
     });
     event.target.title.value = "";

     return false;
  }
});