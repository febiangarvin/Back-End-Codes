var nama = 'dzaky'

const hurufH = (a) =>{
    var output=''
    for(var i=0; i<a; i++){
        for(var j=0; j<a; j++){
            if(i===(a-1)/2){
                output+='*'
            }
            else{
                if(j===0||j===a-1){
                    output+='*'
                }
                else{
                    output+=''
                }
            }
        }
        output+='\n'
    }
    return output
}

module.exports = {
    nama,
    namalengkap: () => {
    },
    hurufH
}

