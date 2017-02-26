//Page1
myApp.controller('tit1Ctrl',['$scope',function($scope){
	$scope.title = "Hello指令";
}])

myApp.controller('tit2Ctrl',['$scope',function($scope){
	$scope.title = "指令和控制器";
	$scope.loadData1 = function(){
		console.log('加载数据中11...');
	}
}])



myApp.controller('tit3Ctrl',['$scope',function($scope){
	$scope.title = "指令和控制器";
	$scope.loadData2 = function(){
		console.log('加载数据中22...');
	}
}])

myApp.controller('tit4Ctrl',['$scope',function($scope){
	$scope.title = '指令之间交互的方式';
}])

myApp.controller('tit5Ctrl',['$scope',function($scope){
	$scope.title = '独立scope';
}])

myApp.controller('tit6Ctrl',['$scope',function($scope){
	$scope.title = '独立scope';
	$scope.ctrlFlavor = "百威";
}])

myApp.controller('tit7Ctrl',['$scope',function($scope){
	$scope.title = '独立scope';
	$scope.ctrlFlavor = "百威";
}])

myApp.controller('tit8Ctrl',['$scope',function($scope){
	$scope.title = '独立scope';
	$scope.sayHello = function(name){
		alert('Hello' + name);
	}
}])




// //hello
// bookStoreApp.controller('helloCtrl',['$scope',function($scope){
// 	$scope.name = "Hello";
// 	$scope.pageClass = 'hello';
// }])

// //list
// bookStoreApp.controller('listCtrl',['$scope',function($scope){
// 	$scope.names = [
// 		{name:'Tian',name:'Bian',name:'Xiao'}
// 	];
// 	$scope.pageClass = 'list';
// }])

// //慕课一
// bookStoreApp.controller('CommonController',function($scope){
// 	$scope.commonFn = function(){
// 		alert('这里是通用功能！');
// 	};
// })

// bookStoreApp.controller('Controller1',function($scope){
// 	$scope.greeting = {
// 		text:'Hello1'
// 	};
// 	$scope.test1 = function(){
// 		alert('test1');
// 	}
// })

// bookStoreApp.controller('Controller2',function($scope){
// 	$scope.greeting = {
// 		text:'Hello2'
// 	};
// 	$scope.test2 = function(){
// 		alert('test2');
// 	}
// })
// //慕课二
// bookStoreApp.controller('myCtrl',function($scope,$rootScope){
// 	$scope.name = "World";
// 	$rootScope.department = "Angular";
// })
// bookStoreApp.controller('ListCtrl',function($scope){
// 	$scope.names = ['A','B','C'];
// })

// bookStoreApp.controller('EventController',function($scope){
// 	$scope.count = 0;
// 	$scope.$on('MyEvent',function(){
// 		$scope.count++;
// 	});
// })
// //慕课三
// //双向数据绑定1
// 	bookStoreApp.controller('UserInfoCtrl',['$scope',function($scope){
// 		$scope.userInfo = {
// 			email : '123456@qq.com',
// 			password : '123456',
// 			autoLogin : true
// 		};

// 		$scope.getFormData = function(){
// 			console.log($scope.userInfo);
// 		}

// 		$scope.setFormData = function(){
// 			$scope.userInfo = {
// 				email : '78456@qq.com',
// 				password : '1245678',
// 				autoLogin : false
// 			}
// 		}

// 		$scope.resetForm = function(){
// 			$scope.userInfo = {
// 				email : '',
// 				password : '',
// 				autoLogin : false
// 			}			
// 		}
// 	}])
// ////双向数据绑定2
// 	bookStoreApp.controller('HeaderController',['$scope',function($scope){
// 		$scope.isError = false;
// 		$scope.isWarning = false;
// 		$scope.showError = function(){
// 			$scope.messageText = "This is an error";
// 			$scope.isError = true;
// 			$scope.isWarning = false;
// 		};
// 		$scope.showWarning = function(){
// 			$scope.messageText = 'This is a warning';
// 			$scope.isError = false;
// 			$scope.isWarning = true;
// 		}
// 	}])

// //隐藏显示列表
// bookStoreApp.controller('showCtrl',['$scope',function($scope){
// 	$scope.menuState = {show:true};
// 	$scope.toggleMenu = function(){
// 		$scope.menuState.show = !$scope.menuState.show;
// 	}
// }])

