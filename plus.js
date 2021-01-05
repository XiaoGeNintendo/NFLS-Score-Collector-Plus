
function lsg(str){
	return localStorage.getItem(str);
}

function lss(str,val){
	localStorage.setItem(str,val)
}

function encryptString(str, psd){
	var iv="1145141919810def";

	var key=CryptoJS.enc.Utf8.parse(CryptoJS.MD5(psd).toString());
	iv=CryptoJS.enc.Utf8.parse(iv);

	var encrypted = CryptoJS.AES.encrypt(str, key, {
	    iv: iv,
	    mode: CryptoJS.mode.CBC,
	    padding: CryptoJS.pad.Pkcs7
	});
	 
	encrypted = encrypted.toString();

	return encrypted;
}

function decryptString(str, psd){

	var iv="1145141919810def";


	var key=CryptoJS.enc.Utf8.parse(CryptoJS.MD5(psd).toString());
	iv=CryptoJS.enc.Utf8.parse(iv);

	var decrypted = CryptoJS.AES.decrypt(str, key, {
	    iv: iv,
	    mode: CryptoJS.mode.CBC,
	    padding: CryptoJS.pad.Pkcs7
	});
	
	console.log(decrypted)
	
	decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
	return decrypted
}

function getExams(){

    if(lsg("exam")==null){
        lss("exam","[]");
    }

    return eval(lsg("exam"));
}

console.log("NFLS Score Collector Plus by XGN from HHS 2020")