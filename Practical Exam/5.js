let str = "hello";

function reverseString(str)
{
    let news = "";
    for(let i=str.length-1; i>=0; i--)
    {
        news += str[i];
    }
    console.log(news);
}

reverseString(str);