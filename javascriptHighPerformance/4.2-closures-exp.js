function create(){
    let count = 0
    return {
        inc : function(){
            count+=5
        },
        print: function(){
            console.log(count)
        }
    }
}

let c = create()
c.inc()
c.print()