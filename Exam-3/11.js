let arr1= [1,2,3,4]
let arr2= [3,4,5,6]

function findintersection(a1,a2)
{
    let newSet = new Set(a1)
    let newarr=[]

    for(let char of a2)
    {{
        if(newSet.has(char))
        {
            newarr.push(char)
        }
    }}
    console.log(newarr);
    
}


findintersection(arr1,arr2)