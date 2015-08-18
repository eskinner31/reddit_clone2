var app = angular.module("reddit", ['ngAnimate','angularMoment']);

app.controller("Posts",function($scope){
  $scope.message = {
   time: new Date()
  }
  $scope.rev = true;
  $scope.showValue = false;
  $scope.posts = [];
  $scope.addPost = function(){
    $scope.posts.push({title: $scope.title,
                       author: $scope.author,
                       imageURL: $scope.imageURL,
                       description: $scope.description,
                       votes: 0,
                       comments: [],
                       addCom: false,
                       showCom: false
                     })
    $scope.title = "";
    $scope.author = "";
    $scope.imageURL = "";
    $scope.description = "";
    $scope.showValue = false;
  }
  $scope.showHide = function(){
    if($scope.showValue === false){
      $scope.showValue = true;
    }else{
      $scope.showValue = false;
    }
  }
  $scope.showComments = function(){
    if(this.post.showCom === false){
      this.post.addCom = false;
      this.post.showCom = true;
    }else{
      this.post.showCom = false;
    }
  }
  $scope.addComments = function() {
    if(this.post.addCom === false){
      this.post.showCom = false;
      this.post.addCom = true;
    }else{
      this.post.addCom = false;
    }
  }
  $scope.postComments = function(){
    this.post.comments.push({commenter: this.commenter,
                             comment: this.comment});

    this.post.addCom = false;
    this.post.showCom = true;
    this.commenter = "";
    this.comment = "";
  }

  $scope.sortBy = function(){
    console.log(this);
    if(this.selected === "votes"){
      $scope.rev = true;
    }else{
      $scope.rev = false;
    }
  }

  $scope.increment = function(){
    this.post.votes++
  }
  $scope.decrement = function(){
    this.post.votes--
  }
})
