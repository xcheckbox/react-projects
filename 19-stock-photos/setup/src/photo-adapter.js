export const PhotoAdapter = (photos) => {

  return photos.map( photo => ({
    id: photo.id,
    name: photo.name,
    likes: photo.likes,
    image: photo.urls.regular,
    user: `${photo.user.first_name} ${photo.user.last_name}`,
    userImg: photo.user.profile_image.medium,
    userUrl: photo.user.portfolio_url
  }))
}