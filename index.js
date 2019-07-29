document.getElementById('word1').onkeypress = function(event) {
    if(event.keyCode == 13) {
        event.preventDefault();
        let form = document.getElementById('word1').value;
        is_palindrome();
    }
}

function is_palindrome() {
let word1 = document.getElementById('word1').value;
let word1_inverted = [];    
let word1_nospace = word1.replace(/[^a-z0-9]/gi,'').toLowerCase();

for (let i = word1_nospace.length-1 ; i >= 0 ; i--) {
    word1_inverted.push(word1_nospace.charAt(i));
}

for (let k = 0 ; k < word1_nospace.length ; k ++) {
    if (word1_nospace.charAt(k) == word1_inverted[k])   {
        if ( k == word1_nospace.length-1 ) {
            document.getElementById('title').innerHTML = "Yeah! '" +word1 +"' is a palindrome :)";   
        }
    } else {
        document.getElementById('title').innerHTML = "Oh... '" +word1 +"' is not a palindrome :(";
        break;
    }
}

}
