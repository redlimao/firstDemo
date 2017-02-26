// myApp.run(function($templateCache){
// 	$templateCache.put('tpls/Page1.html',"<div>Hello everyone!!!!!</div>");
// })
//把模板缓存起来

// myApp.directive('hello',function(){
// 	return{
// 		restrict : 'AEMC',
// 		template : $templateCache.get('tpls/Page1.html'),
// 		replace : true
// 	}
// });

// myApp.directive('hello',function(){
// 	return{
// 		restrict : 'AE',
// 		transclude:true,
// 		template:'<div>Hello everyone!<div ng-transclude></div></div>'
// 	}
// });

// myApp.directive('hello',function(){
// 	return{
// 		restrict : 'AEMC',
// 		template : '<div>HI everyone！</div>',
// 		replace : true
// 	}
// });

myApp.directive('loader',function(){
	return {
		restrict:'AE',
		link:function(scope,element,attrs){
			element.bind('mouseenter',function(){
				// scope.loadData();
				// scope.$apply('loadData()');
				scope.$apply(attrs.howtoload);
			})
		}
	}
})

myApp.directive('superman',function(){
	return {
		scope : {},
		restrict : 'AE',
		controller : function($scope){
			$scope.abilities = [];
			this.addStrength = function(){
				$scope.abilities.push('strength');
			};
			this.addSpeed = function(){
				$scope.abilities.push('speed');
			};
			this.addLight = function(){
				$scope.abilities.push('light');
			};
		},
		link:function(scope,element,attrs){
			element.addClass('btn btn-primary');
			element.bind('mouseenter',function(){
				console.log(scope.abilities);
			});
		}
	}
});

myApp.directive('strength',function(){
	return {
		require : '^superman',
		link : function(scope,element,attrs,supermanCtrl){
			supermanCtrl.addStrength();
		}
	}
});

myApp.directive('speed',function(){
	return {
		require : '^superman',
		link : function(scope,element,attrs,supermanCtrl){
			supermanCtrl.addSpeed();
		}
	}
});

myApp.directive('light',function(){
	return {
		require : '^superman',
		link : function(scope,element,attrs,supermanCtrl){
			supermanCtrl.addLight();
		}
	}
});

myApp.directive('hello',function(){
	return {
		restrict : 'AE',
		scope : {},
		template : '<div><input type="test" ng-model="userName"/>{{userName}}</div>',
		replace : true
	}
})

//使用@将属性绑定到flavor属性上
myApp.directive('drink',function(){
	return {
		restrict : 'AE',
		scope : {
			flavor : '@'
		},
		template : "<div>{{flavor}}</div>"
		// ,
		// link : function(scope,element,attrs){
		// 	scope.flavor = attrs.flavor;
		// }
	}
})
//使用=将属性绑定到flavor属性上
myApp.directive('drink1',function(){
	return {
		restrict : 'AE',
		scope : {
			flavor : '='
		},
		template : '<input type="text" ng-model="flavor" />'
	}
})

myApp.directive('sayhello',function(){
	return {
		restrict : 'AE',
		scope : {
			sayh : '&'
		},
		template : '<input type="text" ng-model="userName" /><br/>'+
				   '<button class="btn btn-default" ng-click="sayh({name:userName})">sayName</button><br/>'
	}
});






