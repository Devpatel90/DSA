let q1= [];
let q2= [];

function push(a)
{
        q2.push(a)
        while(q1.length > 0)
        {
            q2.push(q1.shift())
        }

        [q1,q2] = [q2,q1]

}

function pop(){
    return q1.shift()
}

push(10)
push(20)
push(30)
push(40)
push(50)

console.log(pop());
