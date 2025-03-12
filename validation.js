function validate(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');
    var msg = '';
    if (email == '') {
        msg = 'Please enter an email.';
        msgBox.style.color = 'red';
    } else if (pass == '') {
        msg = 'Password must be at least 8 characters.';
        msgBox.style.color = 'red';
    } else if (age == '') {
        msg = 'Age must be between 12 and 50.';
        msgBox.style.color = 'red';
    }
    else {
        msg = 'Login successful!';
        msgBox.style.color = 'green';
    }
    msgBox.innerHTML = msg;
}


