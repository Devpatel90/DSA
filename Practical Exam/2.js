let queue=[]

function enqueue(a){
    queue.push(a)
}

function dequeue(){
    return queue.shift()
}

function front(){
    return queue[0]
}

function rear(){
    return queue[queue.length-1]
}

function revqueue(){
    let stack = [];

    while(queue.length){
       let a = dequeue()
        stack.push(a)
    }
    while(stack.length){
       queue.push(stack.pop())
    }
    console.log(queue)
}

enqueue(10)
enqueue(20)
enqueue(30)
enqueue(40)
enqueue(50)

revqueue()