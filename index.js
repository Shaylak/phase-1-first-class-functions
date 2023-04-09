function spy(){}

const receivesAFunction = (callback) => {
    return callback();
}
 receivesAFunction (spy());

function returnsANamedFunction(){
 returnsANamedFunction = function(){

    }
    return returnsANamedFunction;
}

function returnsAnAnonymousFunction(){
     return (function(){});
}
returnsAnAnonymousFunction;