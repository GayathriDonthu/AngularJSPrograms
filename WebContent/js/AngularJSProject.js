/**
 * 
 */

var createworker = function(){
  
  
  var task1 = function(){
    console.log("task1");
  };
  
  var task2 = function(){
    console.log("task2");
  };
  return{
    job1: task1,
    job2:task2
  };
};

var work = createworker();

work.job1();
work.job2();