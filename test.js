mc.regPlayerCmd("hello","say hello!",function(pl,args){
    pl.tell("Hello!");
});

mc.regConsoleCmd("oumu","引数の言葉をオウム返しします",oncmd_oumu)

function oncmd_oumu(pl,args){
    if(args.length == 1){
        pl.tell(args[0])
    }else{
        pl.tell("引数を指定してください")
    }
}

mc.listen("onJoin",function(){
    mc.broadcast("こんにちは");
});