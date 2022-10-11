var topic_1 =document.getElementById("topic1");
var comment_1 = document.getElementById("comment1");
var comment_2 = document.getElementById("comment2");

topic_1 = 0 ;
comment_1 = 0 ;
comment_2 = 0 ;

function postFunction(){
    var text_1 = document.getElementById("text1").value;
    if(topic_1 == 0){
        document.getElementById("topic1").innerText = text_1;
        topic_1 = text_1;
    }
    else if(comment_1 == 0 ){
        document.getElementById("comment1").innerText = text_1 ;
        comment_1 = text_1;
    }else if(comment_2 == 0) {
        document.getElementById("comment2").innerText = text_1  ;
        comment_2 = text_1;
    }
}

function clearFunction(){
    document.getElementById("topic1").innerText = "" ;
    document.getElementById("comment1").innerText = "" ;
    document.getElementById("comment2").innerText = ""  ;
    document.getElementById("text1").value = " type here! ";
    topic_1 = 0 ;
    comment_1 = 0 ;
    comment_2 = 0 ;
}
