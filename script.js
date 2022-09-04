function imgchange(e){
    var img = e.src;
    var array = img.split("/");
    var imgstr = "";
    for(var i = 3;  i<array.length; i++)
    {
        imgstr = imgstr + array[i];
        if(i != array.length - 1)
        {
            imgstr = imgstr + '/';
        }

    }
    document.getElementById("mainslider").src = imgstr;


}