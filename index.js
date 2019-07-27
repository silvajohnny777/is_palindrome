function is_palindrome() {
	let palavra1 = document.getElementById('palavra1').value;
    let palavra1_invertida = [];    
	let palavra1_nospace = palavra1.replace(/[^a-z0-9]/gi,'').toLowerCase();
	
	for (let i = palavra1_nospace.length-1 ; i >= 0 ; i--) {
        palavra1_invertida.push(palavra1_nospace.charAt(i));
    }
	
	for (let k = 0 ; k < palavra1_nospace.length ; k ++) {
        if (palavra1_nospace.charAt(k) == palavra1_invertida[k])   {
            if ( k == palavra1_nospace.length-1 ) {
                document.getElementById('title').innerHTML = "Yeah! '" +palavra1 +"' is a palindrome :)";   
            }
        } else {
            document.getElementById('title').innerHTML = "Oh... '" +palavra1 +"' is not a palindrome :(";
            break;
        }
    }	
}
