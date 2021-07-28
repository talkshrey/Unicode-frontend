function Genotp() {
    var raw = "{\r\n    \"mobile\": \"9833447698\",\r\n    \"secret\": \"U2FsdGVkX1/K10bXSsDZI+l05XTwv2Hbo7+jbsk7AY******************************DnJPuwHUKOC5A==\"\r\n}";

    var requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow'
    };

    fetch("https://cdn-api.co-vin.in/api/v2/auth/generateMobileOTP", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function Confirmotp() {
    var raw = "{\r\n    \"otp\": \"dcdffbdd599520e5cbf6452799833fb73082359b2015906a518a2a26b5a62ab4\",\r\n    \"txnId\": \"35e54318-c93b-44f8-8e0e-862c81962f57\"\r\n}";

    var requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow'
    };

    fetch("https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function states() {
    var myHeaders = new Headers();
    myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function getdis() {
    var myHeaders = new Headers();
    myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/districts/9", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}