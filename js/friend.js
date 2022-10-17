exports.search_and_add_friend=search_and_add_friend

function search_and_add_friend(s){
    if(s.length>16){
        return 'Username can\'t be longer than 16 letters!'
    }else if(s=='liao' || s=='Liao'){
        return 'Send friend request successfully!'
    }else{
        return 'This user does not exist!'
    }
}