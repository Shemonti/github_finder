class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }
    showprofile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
        <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" 
        target="_blank" class="btn btn-primary btn-block mb-4">
        View Profile</a>
        </div>

        <div class="col-md-9">
        <span class="badge bg-primary">Public Repos:${user.public_repos}</span>
        <span class="badge bg-secondary">Public Gists:${user.public_gists}</span>
        <span class="badge bg-success">Followers:${user.followers}</span>
        <span class="badge bg-info">Following:${user.following}</span>
         
        <br><br>
        <ul class="list-group">
        <li class="list-group-item">Company:${user.company}</li>
        <li class="list-group-item">Blog:${user.blog}</li>
        <li class="list-group-item">Location:${user.location}</li>
        <li class="list-group-item">Member Since:${user.created_at}</li>
        </ul>
        </div>
        </div>
        </div>`
    }
    clearprofile() {
        this.profile.innerHTML = '';
    }
    showalert() {
        let notification = document.getElementById('noti')
        notification.innerHTML = `
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Message!</strong>User Not found.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
setTimeout(function () {
    notification.innerHTML = ''

}, 2000);
    }
}

