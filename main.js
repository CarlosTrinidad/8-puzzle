 var Search = require("./search");
 var Problem = require("./puzzle");
 var Strategy = require("./breath");


var strategy = new Strategy();
var problem = new Problem({
			// matriz: [ [ 2, 6, 3 ], [ 7, 0, 4 ], [ 5, 8, 1 ] ]
			// matriz:[[2,4,3],[5,7,6],[1,8,0]]
			matriz:[[1,0,3],[5,2,6],[4,7,8]]
			});


var search = new Search(problem,strategy);
search.run();
