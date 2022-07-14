//Read in using D3

let ssNames = [], 
ssMetadata = [],
ssSamples = [],
ssLoopObj = {};

let displayObj = function () {

    for (let prop in ssLoopObj )
    
    {

        console.log(prop);

        console.log(ssLoopObj[prop]);

    }

};


d3.json('samples.json')
    .then(function(data) {

  console.log(data);

  ssNames = data.names;

  ssMetadata = data.metadata;
 
  ssSamples = data.samples;

  ssLoopObj = data;

  createTable = function () {

  

}

});




















   
