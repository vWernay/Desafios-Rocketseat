const githubProfile = 'vWernay';
const colors = [
    '',
    'blue',
    'red',
    'cyan',
    'orange',
    '#988BC7',
    '#44475a',
    '#483C67',
    '#191622',
]

$(function() {
    async function getGithubProfile() {
        fetch(`https://api.github.com/users/${githubProfile}`, {
            method: 'GET'
        })
        .then(response => response.json()).then(data => {
            if (data) {
                $('#profileName').text(data.name || data.login);
                $('#profileImage').text(data.avatar_url);
                $('#profileFollowers').text(data.followers);
                $('#profileFollowing').text(data.following);
                $('#profileRepositories').text(data.public_repos);
                if (data.company) {
                    $('#profileCompany').text(data.company);
                } else {
                    $('#profileCompanyLi').empty();
                }
                if (data.location) {
                    $('#profileLocation').text(data.location);
                } else {
                    $('#profileLocationLi').empty();
                }
            }
            console.log(data);
        })
        .catch(function(err) {
            console.error(err);
        })   
    }
    getGithubProfile();
});

async function handleChangeCardBorder() {
    const newColorIndex = Math.floor(Math.random() * colors.length);
    $('.card').css('border', `1rem solid ${colors[newColorIndex]}`);
}
