let serachbtn = document.getElementById('searchbtn')
let searchuser = document.getElementById('searchUser')
let ui = new UI();
serachbtn.addEventListener('click', srch);

function srch(e) {
    let usertext = searchuser.value;
    if (usertext != '') {
        //fetch api
        fetch(`https://api.github.com/users/${usertext}`)
            .then(result => result.json())
            .then(data => {
                console.log(data)
                if (data.message == 'Not Found') {
                    //show Alert
                    ui.showalert()
                    
                    
                }
                else {
                    //show Profile
                    ui.showprofile(data)
                }
            })
    }
    else {
        //clear
        ui.clearprofile();
    }

}