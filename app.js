let pronoun = ['the', 'our'];
let adj = ['great', 'big', 'small'];
let noun = ['jogger', 'racoon', 'orange', 'corrupted', 'legendary'];
let dot = ['.com', '.net', '.io', '.gub']




for(let i = 0; i < pronoun.length ; i++){
    for(let j = 0; j < adj.length ; j++){
        for(let k = 0; k < noun.length; k++){
            for(let m = 0; m < dot.length; m++){
                let domainName = pronoun[i] + adj[j] + noun[k] + dot[m]
                console.log(domainName)
            }
        }
    }
}