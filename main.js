const link_social_media = {
  github: 'MiguelosAguialos',
  youtube: 'Lofi Girl',
  facebook: 'anitta',
  instagram: 'miguel_aguiar_fernandes',
  twitter: 'anitta'
}

function repeat() {
  for (let li of lista.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${link_social_media[social]}`
  }
}
repeat()

function getUserGitHubInfos() {
  const url = `https://api.github.com/users/${link_social_media.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImg.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getUserGitHubInfos()
