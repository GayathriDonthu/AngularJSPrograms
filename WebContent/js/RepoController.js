/**
 * 
 */
(function(){
	
	var module = app.module("githubViewer");
	
	var RepoController = function($scope, $routeParams, github){
		
		var reponame = $routeParams.reponame;
		var username = $routeParams.username;
		
		github.getRepoDetails(username, reponame)
			.then(onRepo, onError);
		
	};
	
	module.controller("RepoController", RepoController);
	
}());